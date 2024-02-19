import React from 'react';


const Projects = () => {
    return(
    
        <section className='projects'>
            <h2>Projects</h2>
            <div className='projectslist'>
                
                <div className= 'project'>
                    <h3>React ToDoApp</h3>
                    <p><span>Description: </span>This application uses React JS technology and we can add new tasks, mark tasks completed and can view active tasks</p>
             <p>Link:        <a style={{color: 'blue'}} href='https://react-js-to-do-app-gamma.vercel.app/' target='_blank' rel=" noreferrer">React ToDoApp</a></p>

                </div>
                <div className= 'project'>
                    <h3>React Ecommerce Website</h3>
                    <p><span>Description: </span> This application uses React JS technology and by using this website we can buy different types of products and can add them to cart. This website also shows the total cost of the products we have bought.</p>
              <p>Link: <a style={{color: 'blue'}} href='https://react-ecommerce-phi-weld.vercel.app/' target='_blank' rel=" noreferrer">React Ecommerce Website</a></p>  

                </div>
                <div className= 'project'>
                    <h3>Ecommerce website using fakeAPI</h3>
                    <p><span>Description: </span>This website contains a navigation bar with sections Home,About Us and Contact Us. And products catalogue obtained from a fake API website.</p>
                  <p>Link:   <a style={{color: 'blue'}} href='https://ecommerce-project-seven-blue.vercel.app/' target='_blank' rel=" noreferrer">Ecommerce website using fakeAPI</a></p>

                </div>
            </div>
        </section>
    )
};
export default Projects ;