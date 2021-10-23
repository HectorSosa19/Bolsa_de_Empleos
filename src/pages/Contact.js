import React from 'react'
import '../css/App.css';
import icono from '../images/6.png';


const Contact= () => {
    return (
<div id="layoutDefault">
            <div id="layoutDefault_content">
                <main>
                    <header class="page-header-ui page-header-ui-light bg-white">
                        <div class="page-header-ui-content">
                            <div class="container px-5">
                                <div class="row gx-5 justify-content-center">
                                    <div class="col-xl-8 col-lg-10 text-center">
                                        <img class="mb-4 dise" src={icono} />
                                        <h1 class="page-header-ui-title">Welcome to my portfolio!</h1>
                                        <p class="page-header-ui-text">I am a graphic artist, illustrator, and UI designer specializing in modern, creative design based in Wildemount, TX</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="svg-border-rounded text-light">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
                        </div>
                    </header>
                    <section class="bg-light py-10">
                        <div class="container px-5">
                            <div class="row gx-5 text-center">
                                <div class="col-lg-4 mb-5 mb-lg-0">
                                    <div class="articulo bg-danger icon-stack icon-stack-xl bg-red text-white mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></div>
                                    <h3>Illustration</h3>
                                    <p class="mb-0">I provide custom illustration services for contract clients</p>
                                </div>
                                <div class="col-lg-4 mb-5 mb-lg-0">
                                    <div class="articulo bg-warning icon-stack icon-stack-xl bg-yellow text-white mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg></div>
                                    <h3>UI Design</h3>
                                    <p class="mb-0">User experience and interface designs is one of my specialties</p>
                                </div>
                                <div class="col-lg-4">
                                    <div class="articulo bg-primary icon-stack icon-stack-xl bg-blue text-white mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-droplet"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg></div>
                                    <h3>Graphic Design</h3>
                                    <p class="mb-0">Photo restoration, post processing, and other photo services</p>
                                </div>
                            </div>
                        </div>
                        <div class="svg-border-rounded text-white">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
                        </div>
                    </section>
                    
                    
                </main>
            </div>
            
        </div>
    )
}

export default Contact