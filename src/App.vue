<script setup>
import { RouterView } from 'vue-router'
import SectionWrapper from '@/components/SectionWrapper.vue'
import ContainerWrapper from '@/components/ContainerWrapper.vue'
import Row from '@/components/Row.vue'
import Column from '@/components/Column.vue'
import Img from '@/components/UIElements/Img.vue'
</script>

<template>
  <SectionWrapper>
        <ContainerWrapper>
            <Row>
                <Column>
                    <Img 
                        image_src="naruto/1.jpg" 
                        image_alt="altbanner"
                        image_loading="eager"
                    />
                </Column>
            </Row>
        </ContainerWrapper>
    </SectionWrapper>
    <SectionWrapper>
        <ContainerWrapper>
            <Row>
                <Column v-for="n in 32" additional_class="sm:w-1/4">
                   <Img 
                    :image_src="`naruto/${n}.jpg`" 
                    :image_alt="`alt${n}`"
                    image_loading="lazy"
                    />
                </Column>
            </Row>
        </ContainerWrapper>
    </SectionWrapper>


    <SectionWrapper>
        <ContainerWrapper>
            <Row>
                <Column>
                    <h2>The Legend of Veridiania</h2>

                    <p>
                        Once upon a time, in the sprawling expanse of the cosmos, amidst the twinkling stars and swirling galaxies, there existed a realm known as Veridiania. Veridiania was a world unlike any other, where magic danced in the air like fireflies on a warm summer night, and the very essence of life pulsed with an otherworldly energy.
                    </p>

                    <p>
                        At the heart of Veridiania lay the City of Elysium, a magnificent metropolis adorned with towering spires of crystal and streets paved with shimmering cobblestones. It was here that the Council of Elders, wise beings of immense power and ancient knowledge, ruled with benevolence and grace, guiding the destiny of their realm with unwavering wisdom.
                    </p>

                    <p>
                        But beyond the gleaming walls of Elysium, in the shadowy depths of the Forbidden Forest, a darkness stirred. Deep within the tangled undergrowth, an ancient evil known as the Shadowlord languished, biding its time, plotting its revenge against the light.
                    </p>

                    <p>
                        For eons, the Shadowlord had been sealed away by the combined magic of the Elders, its malevolent influence contained within the confines of its prison. But now, fueled by hatred and thirst for dominion, it sought to break free and unleash its fury upon Veridiania once more.
                    </p>

                    <p>
                        Unbeknownst to the Council, a prophecy had foretold of this impending doom—a prophecy whispered by the winds and etched into the annals of time. It spoke of a chosen one, a hero of legend, who would rise from the ashes of adversity to challenge the darkness and restore balance to the world.
                    </p>

                    <p>
                        And so, fate intervened in the most unexpected of ways. In a humble village nestled amidst the rolling hills of Veridiania, a young orphan named Aria discovered an ancient amulet, pulsating with an ethereal glow. Little did she know, this seemingly insignificant trinket would set into motion a chain of events that would shape the destiny of their world.
                    </p>

                    <p>
                        Guided by visions and guided by the whispers of the wind, Aria embarked on a perilous journey across the vast expanse of Veridiania. Along the way, she encountered allies and adversaries alike—brave warriors, wise sages, and cunning tricksters—all bound together by the threads of fate.
                    </p>

                    <p>
                        Together, they traversed treacherous landscapes and faced unimaginable trials, confronting their deepest fears and darkest desires with unwavering resolve. Through the power of friendship and the strength of their convictions, they overcame every obstacle in their path, drawing ever closer to their ultimate destiny.
                    </p>

                    <p>
                        Meanwhile, in the City of Elysium, whispers of unrest began to spread like wildfire through the streets. As the Council of Elders struggled to maintain order in the face of mounting chaos, dissent brewed within their ranks, threatening to tear apart the very fabric of their society.
                    </p>

                    <p>
                        Unbeknownst to them, a traitor lurked in their midst, a puppet of the Shadowlord's insidious influence, whose machinations threatened to undo centuries of peace and prosperity. With each passing day, the darkness crept closer, its tendrils reaching ever deeper into the heart of Veridiania.
                    </p>

                    <p>
                        But as the hour of reckoning drew near, Aria and her companions pressed onward, their spirits undaunted by the challenges that lay ahead. For they knew that their journey was not merely a quest for victory, but a testament to the resilience of the human spirit, and the enduring power of hope in the face of despair.
                    </p>

                    <p>
                        At last, they reached the gates of the Forbidden Forest, where the Shadowlord lay in wait, shrouded in darkness and cloaked in malice. With courage in their hearts and determination in their eyes, they prepared to face their greatest foe, knowing that the fate of Veridiania hung in the balance.
                    </p>

                    <p>
                        In a climactic battle that shook the very foundations of the world, Aria and her companions clashed with the forces of darkness, their valor shining like beacons of light in the encroaching gloom. Against all odds, they emerged victorious, banishing the Shadowlord back into the depths of its prison and restoring peace to Veridiania once more.
                    </p>

                    <p>
                        As the dawn broke over the horizon, bathing the world in a golden glow, Aria stood triumphantly amidst the ruins of their battle, her eyes alight with the fire of victory. And though their journey had been long and arduous, she knew that their quest was far from over—for as long as there was darkness in the world, there would always be those willing to fight for the light.
                    </p>

                    <p>
                        And so, with the promise of a new day dawning on the horizon, Aria and her companions set forth once more, their hearts filled with hope and their spirits unbroken, ready to face whatever challenges the future may bring. For in the end, they knew that as long as they stood together, nothing could ever truly extinguish the light.
                    </p>
                </Column>
            </Row>
        </ContainerWrapper>
    </SectionWrapper>


    <SectionWrapper>
        <ContainerWrapper>
            <Row>
                <Column v-for="n in 32" additional_class="sm:w-1/4">
                   <Img 
                    :image_src="`naruto/${n}.jpg`" 
                    :image_alt="`alt${n}`"
                    image_loading="lazy"
                    />
                </Column>
            </Row>
        </ContainerWrapper>
    </SectionWrapper>
    <SectionWrapper>
        <ContainerWrapper>
            <Row>
                <Column v-for="n in 32" additional_class="sm:w-1/4">
                   <Img 
                    :image_src="`naruto/${n}.jpg`" 
                    :image_alt="`alt${n}`"
                    image_loading="lazy"
                    />
                </Column>
            </Row>
        </ContainerWrapper>
    </SectionWrapper>
</template>
