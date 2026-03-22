import Card from "./Card";

const items = [
  {
    id: 1,
    title: "Cloud Infrastructure",
    description:
      "Scalable cloud solutions designed for high-traffic MERN applications with automated load balancing.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    title: "Secure Authentication",
    description:
      "Implementing OAuth2 and JWT-based security layers to protect sensitive user data across platforms.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 4, // Updated Image Link
    title: "API Optimization",
    description:
      "Refining REST and GraphQL endpoints for lightning-fast response times and minimal latency.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 5,
    title: "Mobile First Design",
    description:
      "Crafting fluid, responsive interfaces that ensure a seamless experience from desktop to smartphone.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 6,
    title: "Database Architecture",
    description:
      "Efficient MongoDB schema design optimized for complex relational queries and rapid indexing.",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=400",
  },
];

const Cardlist = ({container}) => {
   return (
    <div className="p-8 space-y-60">
      {items.map((item) => (
        <Card key={item.id} item={item} container={container} />
      ))}
    </div>
  );
};

export default Cardlist;
