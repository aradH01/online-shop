import dynamic from "next/dynamic";
const Favorites = dynamic(() => import('@/components/pages/favorites/Favorites'));

export default function FavoritesPage() {
    return (
        <div className="">
            <Favorites/>
        </div>
    );
}
