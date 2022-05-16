const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "40px",
    duration: 700,
    reset: false
});

scrollReveal.reveal(
    `header, #gallery, main, 
    #about, #popular-weekly, #astronauts, #best-artist`
    , { interval: 100 }
);