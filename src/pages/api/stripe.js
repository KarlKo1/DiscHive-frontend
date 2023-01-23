import Stripe from "stripe";
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);
import { getSession } from "@auth0/nextjs-auth0";
import { AllowedCountries } from "../../lib/allowedCountries";

export default async function handler(req, res) {
  const session = await getSession(req, res);
  const user = session?.user;
  if (user) {
    //Create checkout session for logged in user
    const stripeId = user["http://localhost:3000/stripe_customer_id"];
    if (req.method === "POST") {
      try {
        const session = await stripe.checkout.sessions.create({
          submit_type: "pay",
          mode: "payment",
          customer: stripeId,
          payment_method_types: ["card"],
          shipping_address_collection: {
            allowed_countries: AllowedCountries,
          },
          shipping_options: [
            { shipping_rate: "shr_1MRw9JAGtpYFlTkNgl7csEz5" },
            { shipping_rate: "shr_1MRw8FAGtpYFlTkNAJy7YOhG" },
          ],
          allow_promotion_codes: true,
          line_items: req.body.map((item) => {
            return {
              price_data: {
                currency: "eur",
                product_data: {
                  name: item.title,
                  images: [item.image.data[0].attributes.formats.thumbnail.url],
                },
                unit_amount: Math.round(item.price * 100),
              },
              adjustable_quantity: {
                enabled: true,
                minimum: 1,
              },
              quantity: item.quantity,
            };
          }),
          //Success/failed page
          success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/cancel`,
        });
        res.status(200).json(session);
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    }
  } else {
    //Create checkout session for the user not logged in
    if (req.method === "POST") {
      try {
        const session = await stripe.checkout.sessions.create({
          submit_type: "pay",
          mode: "payment",
          payment_method_types: ["card"],
          shipping_address_collection: {
            allowed_countries: AllowedCountries,
          },
          shipping_options: [
            { shipping_rate: "shr_1MRw9JAGtpYFlTkNgl7csEz5" },
            { shipping_rate: "shr_1MRw8FAGtpYFlTkNAJy7YOhG" },
          ],
          allow_promotion_codes: true,
          line_items: req.body.map((item) => {
            return {
              price_data: {
                currency: "eur",
                product_data: {
                  name: item.title,
                  images: [item.image.data[0].attributes.formats.thumbnail.url],
                },
                unit_amount: Math.round(item.price * 100),
              },
              adjustable_quantity: {
                enabled: true,
                minimum: 1,
              },
              quantity: item.quantity,
            };
          }),
          //Success/failed page
          success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/cancel`,
        });
        res.status(200).json(session);
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    }
  }
}
