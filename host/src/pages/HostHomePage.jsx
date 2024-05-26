import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function HostHomePage() {
    const [background, setBackground] = useState(20);

    const parallaxRef = useRef(null);
    const mountain = useRef(null);
    const mountains = useRef(null);
    const trees = useRef(null);
    const cloudsL = useRef(null);
    const cloudsR = useRef(null);
    const plane = useRef(null);
    const title = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            var tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top top",
                    end: "3000 bottom",
                    scrub: true,
                    pin: true,
                },
            });
            tl.to(
                mountain.current,
                {
                    y: "+=30",
                },
                0
            );
            tl.to(
                mountains.current,
                {
                    y: "+=120",
                },
                0
            );
            tl.to(
                trees.current,
                {
                    y: "+=40",
                },
                0
            );
            tl.to(
                cloudsL.current,
                {
                    x: "-20%",
                    opacity: 0,

                },
                0
            );
            tl.to(
                cloudsR.current,
                {
                    x: "20%",
                    opacity: 0,
                },
                0
            );
            tl.to(
                plane.current,
                {
                    y: "-40%",
                    x: "-60%",
                },
                0
            );
            tl.to(
                title.current,
                {
                    opacity: 0,
                },
                0
            );
        })

        return () => ctx.revert();
    }, []);

    return(
        <main className="overflow-hidden">
            <div 
                ref={parallaxRef}
                style={{ 
                    backgroundImage: "url(/images/bg.png)", 
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="w-full h-[100vh] z-0"
            >
                <img
                    ref={mountain} 
                    src="/images/mountain1.png" 
                    alt="mountain" 
                    className="absolute bottom-0 w-full z-30" 
                />
                <img
                    ref={mountains}
                    src="/images/mountain2.png"
                    alt="mountains"
                    className="absolute bottom-0 w-full z-10"
                />
                <img
                    ref={trees}
                    src="/images/trees.png"
                    alt="trees"
                    className="absolute bottom-0 w-full z-40"
                />
                <img
                    ref={cloudsL}
                    src="/images/cloudsL.png"
                    alt="cloudsL"
                    className="absolute left-0 w-full z-20"
                />
                <img
                    ref={cloudsR}
                    src="/images/cloudsR.png"
                    alt="cloudsR"
                    className="absolute right-0 w-full z-20"
                />
                <img
                    ref={plane}
                    src="/images/plane.png"
                    alt="plane"
                    className="absolute w-full z-50"
                />
                <div
                    ref={title} 
                    className="absolute flex flex-col w-full h-full items-center top-[15%] z-10"
                >
                    <h1 className="font-anton text-9xl">EXPLORA</h1>
                    <p className="text-3xl">Tu brújula viajera</p>
                </div>
            </div>
        </main>
    )
}