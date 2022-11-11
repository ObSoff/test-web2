import React from "react";
// import Sketch from "react-p5"; (component, variable that existz in .js that makes it easy for us to use?)
import dynamic from 'next/dynamic'

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

	let x = 50;
	let y = 50;
export default (props) => {
	const setup = (p5, canvasParentRef) => { //set as a variable that is the function
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(500, 500).parent(canvasParentRef);
	};

	const draw = (p5) => { 
		// p5.background(0);
		// p5.ellipse(x, y, 70, 70);
        // p5.rect(20, 20, 40, 40);
		// // NOTE: Do not use setState in the draw function or in functions that are executed
		// // in the draw function...
		// // please use normal variables or class properties for these purposes
		// x++;

        //     p5.background(204);
        //     p5.translate(110, 110);
        //     p5.stroke(0);
        //     p5.strokeWeight(70);
        //     p5.line(0, -35, 0, -65); // Body
        //     p5.noStroke();
        //     p5.fill(255);
        //     p5.ellipse(-17.5, -65, 35, 35);  // Left eye dome
        //     p5.ellipse(17.5, -65, 35, 35);   // Right eye dome
        //     p5.arc(0, -65, 70, 70, 0, p5.PI);   // Chin
        //     p5.fill(0);
        //     p5.ellipse(-14, -65, 8, 8);  // Left eye
        //     p5.ellipse(14, -65, 8, 8);   // Right eye
        //     p5.quad(0, -58, 4, -51, 0, -44, -4, -51); // Beak
                  
        p5.background(204);
        for (var x = 35; x < width + 70; x += 70)
        {
                p5.owl(x, 110);
        }
        
               
               const owl(x, y) {
                p5.push();
                p5.translate(x, y);
                p5.stroke(0);
                p5.strokeWeight(70);
                p5.line(0, -35, 0, -65);  // Body
                p5.noStroke();
                p5.fill(255);
                p5.ellipse(-17.5, -65, 35, 35);  // Left eye dome
                p5.ellipse(17.5, -65, 35, 35);   // Right eye dome
                varc(0, -65, 70, 70, 0, PI);   // Chin
                fill(0);
                ellipse(-14, -65, 8, 8); // Left eye
                ellipse(14, -65, 8, 8);  // Right eye
                quad(0, -58, 4, -51, 0, -44, -4, -51); // Beak
                pop();
               }
	};

    

	return <Sketch setup={setup} draw={draw} />;
};