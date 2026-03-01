import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

import kit1Img from "@/assets/kit1.png";
import kit2Img from "@/assets/kit2.png";
import kit3Img from "@/assets/kit3.jpg";

const KitSection = () => {

const { t } = useLanguage();

const [activeIndex,setActiveIndex]=useState(0);

const products = [

{ name:t("kit1Name"), desc:t("kit1Desc"), img:kit1Img },

{ name:t("kit2Name"), desc:t("kit2Desc"), img:kit2Img },

{ name:t("kit3Name"), desc:t("kit3Desc"), img:kit3Img },

];

return (

<section className="py-20 md:py-32 px-6 overflow-hidden">

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-20">


{/* TEXT SIDE */}

<div className="space-y-28 md:space-y-40">

{products.map((product,i)=>(

<motion.div

key={product.name}

initial={{opacity:0,y:80}}

whileInView={{opacity:1,y:0}}

viewport={{amount:.4}}

transition={{duration:.8}}

onViewportEnter={()=>setActiveIndex(i)}

className="min-h-[50vh] flex flex-col justify-center"

>

<span className="text-sm text-primary/60 mb-4">

0{i+1}

</span>


<h3 className="text-2xl md:text-3xl font-display mb-6">

{product.name}

</h3>


<p className="text-muted-foreground leading-relaxed max-w-md">

{product.desc}

</p>


{/* MOBILE IMAGE */}

<div className="mt-8 md:hidden">

<motion.img

src={product.img}

alt={product.name}

initial={{opacity:0,scale:.95}}

whileInView={{opacity:1,scale:1}}

animate={{y:[0,-10,0]}}

transition={{

opacity:{duration:.6},

scale:{duration:.6},

y:{duration:6,repeat:Infinity,ease:"easeInOut"}

}}

className="rounded-3xl shadow-2xl w-full object-cover"

/>

</div>

</motion.div>

))}

</div>



{/* DESKTOP STICKY IMAGE */}

<div className="relative hidden md:block">

<div className="sticky top-28">

<motion.div

animate={{y:[0,-12,0]}}

transition={{

duration:7,

repeat:Infinity,

ease:"easeInOut"

}}

className="relative"

>

{/* GLOW SPIRITUAL */}

<div className="absolute inset-0 blur-3xl opacity-20 bg-primary rounded-full scale-110"/>


<motion.img

key={activeIndex}

src={products[activeIndex].img}

alt="kit"

initial={{opacity:0,scale:.94}}

animate={{opacity:1,scale:1}}

transition={{duration:.9}}

className="relative rounded-3xl shadow-2xl w-full object-cover"

/>

</motion.div>

</div>

</div>


</div>

</section>

);

};

export default KitSection;