import React from 'react'

const Body = () => {
    return (
        <div>
            <h3>Trending & Latest News </h3>
            <div className='pets'>
                <div className='row'>
                    <div className='col'>
                        <div class="card">
                            <img src="https://i.pinimg.com/originals/4b/fb/48/4bfb48bba1761031c67a30f3372b073e.jpg" class="card-img-top" alt="img1" />
                            <div class="card-body">
                                <h5 class="card-title">TOP 5 BEST PETS</h5>
                                <p class="card-text">Cats are beloved pets known for their independent yet affectionate nature, often forming strong bonds with their owners. Dogs, renowned for their loyalty and diverse breeds, offer companionship and can be trained for various roles. </p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card">
                            <img src="https://w0.peakpx.com/wallpaper/374/731/HD-wallpaper-puppy-puppw-dog-food-paw-caine-blue.jpg" class="card-img-top" alt="img2" />
                            <div class="card-body">
                                <h5 class="card-title">BEST FOOD </h5>
                                <p class="card-text">High-quality pet foods prioritize protein sources, include essential vitamins and minerals, and may come in various forms such as kibble, wet food, or raw diets to accommodate diverse preferences and health considerations.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card">
                            <img src="https://img.freepik.com/premium-photo/cute-gray-cat-wizard-costume-halloween-little-pet-wood-background-generative-ai-portrait-cat-with-pumpkins-helloween-party-animal-holiday-autumn-october-concept_788189-10747.jpg" class="card-img-top" alt="img3" />
                            <div class="card-body">
                                <h5 class="card-title">HALLOWEEN LOOK </h5>
                                <p class="card-text">During Halloween, some pet owners enjoy dressing up their furry friends in adorable costumes, transforming them into spooky creatures or iconic characters for festive fun and is celebrated in many countries.Folow for more .</p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="/">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="/">1</a></li>
                        <li class="page-item"><a class="page-link" href="/">2</a></li>
                        <li class="page-item"><a class="page-link" href="/">3</a></li>
                        <li class="page-item"><a class="page-link" href="/">Next</a></li>
                    </ul>
                </nav>
            </div>


        </div>
    );
};

export default Body;
