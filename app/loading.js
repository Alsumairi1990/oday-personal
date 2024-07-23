import HashLoader from "react-spinners/HashLoader";

export default function Loading() {
    return (
        <div className="fixed h-full w-full  inset-0  flex top-0 left-0 items-center justify-center">
         <div className="loader"> </div>
        </div>
    );
}