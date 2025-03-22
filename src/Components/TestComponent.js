import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { toast } from "sonner";

const TestComponent = () => {
    return (
        <button 
            onClick={() => toast.success(
                <div className="flex items-center gap-3"> {/* ✅ Ensures proper spacing */}
                    <span className="text-lg">Login Successful!</span>
                </div>,
                { icon: (
                        <div className="w-[60px] h-[60px] mr-2 flex-shrink-0"> {/* ✅ Fix width/height */}
                            <DotLottieReact
                                src="https://lottie.host/c899280f-0f4e-4bf3-a850-103513db0845/foHnodBteH.lottie" 
                                autoplay 
                                loop={false} 
                            />
                        </div> 
                    ),
                    duration: 900000 // ✅ Custom duration (5 seconds)
                } // ✅ Removes Sonner's default checkmark
            )}
            className="bg-blue-500 text-white p-2 rounded"
        >
            Show Toast
        </button>
    );
};

export default TestComponent;