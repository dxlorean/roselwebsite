import { Button } from "react-aria-components";
import { X } from "lucide-react"; 

export default function MyIconButton() {
    return (
        <Button 
            aria-label="Fermer" 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-stone-100 text-emerald-950 hover:bg-amber-100 hover:text-amber-600 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
            <X className="w-5 h-5" />
        </Button>
    );
}