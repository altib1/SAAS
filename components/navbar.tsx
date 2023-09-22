import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
    return (
        <div className="flex items-center p-4">
            <Button className="mr-4">
                <Menu />
            </Button>
        </div>
    );
}
export default Navbar;