import React from 'react'
import '../../../assets/style/news.css'

import { Grid } from '@mui/material'
// import BikeImage from '../../../../assets/image/bikes.png'
import imageWomanBike from '../../../assets/image/woman.png'
import imageBikes from '../../../assets/image/bikes.png'
import imageTrend from '../../../assets/image/trend-bike.png'

const newsEvent = [
    {
        label: 'Women On Bikes',
        imagePath: imageWomanBike,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan magna pellentesque interdum sagittis. Cras aliquam sapien vitae volutpat vulputate...'
    },
    {
        label: 'Mountain Side Track - Ngawi',
        imagePath: imageBikes,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan magna pellentesque interdum sagittis. Cras aliquam sapien vitae volutpat vulputate...'
    },
    {
        label: 'Bike Commuting Trends 2022',
        imagePath: imageTrend,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan magna pellentesque interdum sagittis. Cras aliquam sapien vitae volutpat vulputate...'
    }
]

export default function AllPages() {
    return (
        <>
            <div className="hero-image" />
            <div className="detail-content">
                <div className="details">
                    <div className="sub-title-card">
                        2022 Mercedes-Benz UCI Mountain Bike World Cups
                    </div>
                    <div className="title-card">
                    Balanche and Pierron claim first-round victories in Lourdes
                    </div>
                    <div className="desc-card">
                        With 20 riders still to go, Germany’s Nina Hoffman (now riding for Santa Cruz Syndicate) hit green on every sector taking a 7-sec lead. European Champion Monika Hrastnik (SLO) came within 3.5-sec of the German in 2nd, and Norway’s Mille Johnset (now on a Commencal bike) showed she had the pace but was always paying for an early fall.
                        Mathilde Bernard started fast and got even faster: the French BMXer-turned downhill racer took 1.5-sec off Hoffman’s mark. Then her compatriot Marine Cabirou, still recovering from a broken back over the winter, lit up the screens and dropped the lead time by a huge 6.7-sec with four riders remaining.
                        2020 UCI World Champion Balanche set out to replicate 2021’s opening race, taking a further 5.6 off the finish time. When 2021 Les Gets winner Tahnée Seagrave (GBR) couldn’t match the Swiss woman, slotting in 2nd, it left just UCI World Champion Myriam Nicole and 2021 UCI World Cup overall winner Valentina Höll (AUT) to try to take charge.
                        The Frenchwoman in the rainbow stripes rolled the dice, pushed hard and survived a couple of scares to stay onboard, but scrubbed speed off on the lower sections to cross the line in 2nd, 0.6 behind Balanche. Last to run, Höll pushed hard but the time slipped away and she came in fourth, like last year not converting a first race top qualification time into a race win. It meant a top three of Balanche, Nicole and Seagrave who were all within a second. With the addition of Cabirou and Bernard, three French women figured in the final top six.

                        With 2015 and 2016 Lourdes winner Aaron Gwin (USA) off the pace following a crash the previous day, it was former Junior UCI World Champion Kade Edwards who took the hot seat with 30 riders remaining. The Britton was only 5sec off the qualifying time of Loïc Bruni, the fastest of five Frenchmen in the top six.
                        Traditional season slow starter, four-time and reigning UCI World Champion Greg Minnaar (RSA) qualified 25th and rolled in 2nd, to be replaced there by Angel Suarez (ESP). Baptiste Pierron sent the early sectors green but faded, as did David Trummer (AUT) on his new Mondraker before Dakotah Norton (USA) made it stick, taking 1st position by 1sec only to be immediately unseated by 2018 British Champion Matt Walker, then by Laurie Greenland (GBR) on his first UCI World Cup race for Santa Cruz Syndicate.
                        Into the top 10, American Luca Shaw smashed 1.5-sec off the time on his first race for Canyon Collective Factory Team. 2020 World Champion Reece Wilson went 2nd then was replaced by his fellow Brit, 2011 and 2016 UCI World Champion Danny Hart.
                        Then it was time for the French athletes to try to show their colours. European Champion Loris Vergier’s hopes were dashed as he slid on an increasingly dusty surface. French Champion Benoit Coulanges’ top section looked ragged but he held huge pace to go first by almost 1sec, then fourth fastest qualifier Thibaut Dapréla washed out and found himself in the catch fencing.
                        His Commencal/Muc-Off by Riding Addiction team-mate, 2018 UCI World Cup overall winner Amaury Pierron, overcame a slide on sector 4 to improve the time by a further 1.5-sec, finishing in 2.47.7! Finn Iles rode smoothly but couldn’t match Pierron, leaving just Loïc Bruni to run. The Lourdes crowd roared for the four-time UCI World Champion, but Super Bruni must still await his first UCI World Cup win on French soil. The top three: Pierron, Iles, Bruni.
                        “Yesterday on the final jump of the quali my foot slipped and stretched my ankle, and it was physio all night, so just to be strong enough to do that run I’m over the moon,” said Amaury Pierron. “The crowd is insane – all the way down they scream!”

                        With 20 riders still to go, Germany’s Nina Hoffman (now riding for Santa Cruz Syndicate) hit green on every sector taking a 7-sec lead. European Champion Monika Hrastnik (SLO) came within 3.5-sec of the German in 2nd, and Norway’s Mille Johnset (now on a Commencal bike) showed she had the pace but was always paying for an early fall.
                        Mathilde Bernard started fast and got even faster: the French BMXer-turned downhill racer took 1.5-sec off Hoffman’s mark. Then her compatriot Marine Cabirou, still recovering from a broken back over the winter, lit up the screens and dropped the lead time by a huge 6.7-sec with four riders remaining.
                        2020 UCI World Champion Balanche set out to replicate 2021’s opening race, taking a further 5.6 off the finish time. When 2021 Les Gets winner Tahnée Seagrave (GBR) couldn’t match the Swiss woman, slotting in 2nd, it left just UCI World Champion Myriam Nicole and 2021 UCI World Cup overall winner Valentina Höll (AUT) to try to take charge.
                        The Frenchwoman in the rainbow stripes rolled the dice, pushed hard and survived a couple of scares to stay onboard, but scrubbed speed off on the lower sections to cross the line in 2nd, 0.6 behind Balanche. Last to run, Höll pushed hard but the time slipped away and she came in fourth, like last year not converting a first race top qualification time into a race win. It meant a top three of Balanche, Nicole and Seagrave who were all within a second. With the addition of Cabirou and Bernard, three French women figured in the final top six.

                        With 2015 and 2016 Lourdes winner Aaron Gwin (USA) off the pace following a crash the previous day, it was former Junior UCI World Champion Kade Edwards who took the hot seat with 30 riders remaining. The Britton was only 5sec off the qualifying time of Loïc Bruni, the fastest of five Frenchmen in the top six.
                        Traditional season slow starter, four-time and reigning UCI World Champion Greg Minnaar (RSA) qualified 25th and rolled in 2nd, to be replaced there by Angel Suarez (ESP). Baptiste Pierron sent the early sectors green but faded, as did David Trummer (AUT) on his new Mondraker before Dakotah Norton (USA) made it stick, taking 1st position by 1sec only to be immediately unseated by 2018 British Champion Matt Walker, then by Laurie Greenland (GBR) on his first UCI World Cup race for Santa Cruz Syndicate.
                        Into the top 10, American Luca Shaw smashed 1.5-sec off the time on his first race for Canyon Collective Factory Team. 2020 World Champion Reece Wilson went 2nd then was replaced by his fellow Brit, 2011 and 2016 UCI World Champion Danny Hart.
                        Then it was time for the French athletes to try to show their colours. European Champion Loris Vergier’s hopes were dashed as he slid on an increasingly dusty surface. French Champion Benoit Coulanges’ top section looked ragged but he held huge pace to go first by almost 1sec, then fourth fastest qualifier Thibaut Dapréla washed out and found himself in the catch fencing.
                        His Commencal/Muc-Off by Riding Addiction team-mate, 2018 UCI World Cup overall winner Amaury Pierron, overcame a slide on sector 4 to improve the time by a further 1.5-sec, finishing in 2.47.7! Finn Iles rode smoothly but couldn’t match Pierron, leaving just Loïc Bruni to run. The Lourdes crowd roared for the four-time UCI World Champion, but Super Bruni must still await his first UCI World Cup win on French soil. The top three: Pierron, Iles, Bruni.
                        “Yesterday on the final jump of the quali my foot slipped and stretched my ankle, and it was physio all night, so just to be strong enough to do that run I’m over the moon,” said Amaury Pierron. “The crowd is insane – all the way down they scream!”
                    </div>
                </div>
                <div className="details-card" style={{marginTop: '40px'}}>
                    <div className="label-related">Related News</div>
                    <div className="related-news">
                    
                        <Grid container
                            spacing={1}
                            direction="coloumn"
                            alignItems="center"
                            justify="center"
                        >
                                {newsEvent.map((item) => (
                                    <Grid item xs={4}>
                                        <div key={item.label} className="content-list">
                                            <img src={item.imagePath} alt="event-bike" style={{width: "100%"}}/>
                                            <div className="event">
                                                <span className="label-event">{item.label}</span>
                                                <p className="desc-event">{item.desc}</p>
                                                <div className="footlabel">
                                                    <span>
                                                        Read More
                                                    </span>
                                                    <span>
                                                        21 MAR 2022
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                ))}
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    )
}
