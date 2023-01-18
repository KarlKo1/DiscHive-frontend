import Stripe from "stripe";
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      //Create checkout session
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        shipping_options: [{ shipping_rate: "shr_1MRji7AGtpYFlTkNJupNq8PP" }],
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
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,
      });
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  }
}
