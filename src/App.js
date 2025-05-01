import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const products = [
  {
    id: 1,
    title: "Pack Élégance Maman",
    description: "Montre fashion ✨ + Mini-parfum Dior 💖 + Trousse beauté 💅",
    price: "110 000 FCFA",
    image: "/images/montre.jpg",
  },
  {
    id: 2,
    title: "Pack Beauté Bien-Être",
    description: "Brosse nettoyante visage 💆‍♀️ + Coffret soins visage ✨",
    price: "49 000 FCFA",
    image: "/images/brosse.jpg",
  },
  {
    id: 3,
    title: "Pack Accessoire Chic",
    description: "Sac à main 👜 + Montre casual chic ⌚",
    price: "65 000 FCFA",
    image: "/images/sac.jpg",
  },
];

export default function LandingPageFeteMeres() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">🎁 Spécial Fête des Mères 🎁</h1>
      <p className="text-center text-lg mb-10">Offrez un cadeau inoubliable livré directement d'Europe 🇫🇷 à Abidjan 🇨🇮</p>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardContent>
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-bold mb-4">{product.price}</p>
              <a
                href={`https://wa.me/33635292973?text=Bonjour%2C%20je%20souhaite%20commander%20le%20${encodeURIComponent(product.title)}%20pour%20la%20F%C3%AAte%20des%20M%C3%A8res.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Commander via WhatsApp</Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        Offre valable jusqu'au 8 mai 2025 – Quantités limitées 📦
      </div>
    </div>
  );
}