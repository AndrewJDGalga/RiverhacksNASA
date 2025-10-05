// Story Management
let currentPage = 1;
const totalPages = 9;
let isNarrating = false;
let narrationTimeout;

const stories = {
    1: {
        title: "Solar Flares and the Northern Lights",
        pages: [
            {
                text: "It was bedtime for Maya and Leo, two siblings getting ready to sleep in their cozy bedroom. As Maya pulled back the curtains on their huge bedroom window, both kids gasped. 'What's that?' Leo pointed at the sky. Beautiful curtains of green and purple light danced across the night sky like magical ribbons. 'Why are there different colors?' Maya wondered aloud. 'It looks like they're dancing!' Suddenly, a small golden glow appeared in their room and with a gentle POP! - there stood Astro the Astronaut, with his friendly smile visible through his helmet. 'What you're seeing here is space weather at work!' Astro explained. 'And I'm here to show you exactly how it happens!'",
                image: "placeholder"
            },
            {
                text: "'Space weather?' Leo asked, confused. 'Like... it's raining in space?' Astro chuckled. 'Not quite! Space weather comes from our Sun, which is 93 million miles away. The Sun releases powerful bursts of energy called solar flares and streams of particles called solar winds.' He tapped his helmet three times - BOOP, BOOP, BOOP - and suddenly their bedroom window shimmered and transformed into a glowing portal to outer space! 'Want to see where the Northern Lights really come from?' Astro asked with excitement. Maya and Leo's eyes grew wide with wonder. This was going to be the best bedtime story ever!",
                image: "placeholder"
            },
            {
                text: "'Would you like to explore and see where it all begins?' Astro extended his gloved hands to both kids. 'YES!' they shouted together, bouncing with excitement. They each grabbed one of Astro's hands, and in a flash of stardust, they zoomed through the portal! Stars streaked past them like shooting stars as they traveled 93 million miles across space. 'There it is!' Astro pointed ahead. The Sun loomed before them - a gigantic ball of swirling, bubbling energy. Maya and Leo watched in awe as massive arcs of bright orange and yellow plasma burst from the Sun's surface. 'Those are solar flares!' Astro explained. 'Each one is bigger than planet Earth!'",
                image: "placeholder"
            },
            {
                text: "As they got closer, a bright, energetic character made of swirling orange and yellow light zoomed up to them. 'Hi there! I'm Flare, a solar flare!' the character said cheerfully, spinning around them. 'I'm a massive explosion of energy from the Sun's surface!' Astro nodded. 'Solar flares release as much energy as millions of atomic bombs! They send out bursts of radiation and charged particles into space.' 'We're pretty powerful,' Flare explained. 'But too much of us can interrupt satellites, radio communications, and even power grids on Earth!' Leo's jaw dropped. 'Wow, that's amazing!' Maya added, 'So you're like the Sun's superpower?' Flare beamed proudly. 'Exactly!' **Question: What happens when solar flares reach Earth? Think about what Flare just told you!**",
                image: "placeholder"
            },
            {
                text: "Just then, a gentle, flowing character made of silvery-blue particles drifted toward them, leaving a shimmering trail. 'Hello, young explorers! I'm Windy, a solar wind!' the character said in a breezy voice. 'What do you do?' asked Maya curiously. 'Great question!' Windy replied. 'I'm a constant stream of charged particles - mostly electrons and protons - that flow from the Sun's corona out into space. I travel at about 400 kilometers per SECOND!' Leo's eyes widened. 'That's super fast!' Astro explained further, 'Solar winds travel through space all the time, but when they interact with Earth's magnetic field, something magical happens!' Windy twirled around them. 'I help create those beautiful lights you saw from your window!' **Question: What are solar winds made of? Remember what Windy said!**",
                image: "placeholder"
            },
            {
                text: "As they continued their journey toward Earth, Maya suddenly pointed ahead. 'What's that huge glowing bubble?' A massive, swirling cloud of plasma and magnetic field was heading toward Earth! 'That's a Coronal Mass Ejection, or CME!' Astro explained seriously. 'It's like a giant bubble of solar material that gets ejected from the Sun.' A new character appeared - a large, swirling entity with electric blue and purple colors. 'I'm Storm, a geomagnetic storm! When CMEs like this one hit Earth's magnetic field, I get created!' Flare and Windy nodded. 'Storm can be dangerous,' Flare added. 'He can damage satellites, disrupt GPS, and even cause power outages!' Astro reassured the kids, 'But don't worry! NASA has special teams of scientists who track space weather 24/7 to keep everyone safe!' **Question: Why do scientists need to track geomagnetic storms?**",
                image: "placeholder"
            },
            {
                text: "As they approached Earth, Leo noticed something incredible. 'Look! There's a glowing shield around Earth!' he exclaimed. 'That's Earth's magnetosphere!' Astro said proudly. 'It's an invisible magnetic shield created by Earth's core. Watch this!' They all watched as the solar wind and particles hit the magnetosphere. Most of them were deflected away, like water flowing around a rock in a stream. 'The magnetosphere acts like Earth's superhero shield,' Astro explained. 'It protects us from most of the harmful radiation and particles from the Sun. Without it, solar wind would strip away our atmosphere!' Maya was amazed. 'So it keeps us safe?' 'Exactly!' Astro replied. 'But some particles do slip through near the North and South Poles - and that's where the magic happens!' **Question: What would happen to Earth without its magnetosphere?**",
                image: "placeholder"
            },
            {
                text: "Suddenly, beautiful ribbons of green, purple, pink, and blue light began dancing in the sky below them near Earth's poles. 'The Aurora!' Maya and Leo shouted together. A graceful character made of shimmering, colorful light appeared, twirling and flowing like a dancer. 'Hello, little ones! I'm Aurora!' she said in a musical voice. Astro smiled. 'When solar wind particles slip through the magnetosphere near the poles, they collide with gases in Earth's atmosphere. Those collisions create these beautiful lights!' 'Green appears when particles hit oxygen at lower altitudes,' Aurora explained, creating a green wave. 'Red happens with oxygen at higher altitudes, and blue and purple come from nitrogen!' Leo watched in wonder. 'So the Northern Lights are like... space weather art?' 'Exactly!' Aurora, Flare, Windy, and Storm all said together. The kids waved goodbye to their new friends. 'Thank you for teaching us!' **Question: What creates the different colors in the Aurora?**",
                image: "placeholder"
            },
            {
                text: "In a gentle whoosh, Maya and Leo found themselves back in their cozy bedroom, still in their pajamas. The portal in their window slowly faded back to normal glass, showing the real Northern Lights still dancing outside. 'That was AMAZING!' Leo jumped up and down. 'I can't believe we just traveled to the Sun!' Maya added, 'Can we go again tomorrow night?' Astro chuckled warmly. 'Space weather is always happening, and there's always more to learn! The universe is full of wonders waiting to be explored.' He began to glow softly. 'Remember, every time you see the Northern Lights, you're seeing space weather in action - a beautiful connection between the Sun and Earth!' 'Goodbye, Astro!' both kids called as he faded into a sparkle of stardust. 'Sweet dreams, young explorers,' his voice echoed gently. Maya and Leo climbed into their beds, their heads full of solar flares, solar winds, and dancing auroras. They'd never look at the night sky the same way again!",
                image: "placeholder"
            }
        ]
    },
    2: {
        title: "Black Holes!",
        pages: [
            {
                text: "Black holes are some of the most mysterious objects in space! They're regions where gravity is so strong that nothing, not even light, can escape once it gets too close.",
                image: "placeholder"
            },
            {
                text: "Black holes form when massive stars collapse at the end of their lives. The star's core becomes so dense that it creates an incredibly powerful gravitational pull.",
                image: "placeholder"
            },
            {
                text: "There's a point of no return around a black hole called the 'event horizon.' Once something crosses this boundary, it can never escape!",
                image: "placeholder"
            },
            {
                text: "Despite their name, black holes aren't actually empty space - they contain a huge amount of matter packed into a tiny area, creating their incredible gravity.",
                image: "placeholder"
            }
        ]
    },
    3: {
        title: "Solar Winds",
        pages: [
            {
                text: "Solar winds are streams of charged particles released from the upper atmosphere of the Sun. These particles flow through our solar system at incredible speeds!",
                image: "placeholder"
            },
            {
                text: "The solar wind travels at speeds of about 400 kilometers per second! That's fast enough to travel from Earth to the Moon in less than an hour.",
                image: "placeholder"
            },
            {
                text: "Earth's magnetic field protects us from most solar wind particles, deflecting them around our planet like an invisible shield.",
                image: "placeholder"
            },
            {
                text: "When solar wind particles do interact with Earth's atmosphere, they can create beautiful auroras and sometimes affect our satellites and power grids.",
                image: "placeholder"
            }
        ]
    },
    4: {
        title: "The International Space Station!",
        pages: [
            {
                text: "The International Space Station (ISS) is a large spacecraft that orbits Earth. It's a home where astronauts live and work in space!",
                image: "placeholder"
            },
            {
                text: "The ISS travels at 28,000 kilometers per hour and orbits Earth about every 90 minutes. That means astronauts see 16 sunrises and sunsets every day!",
                image: "placeholder"
            },
            {
                text: "Astronauts on the ISS conduct important scientific experiments that help us learn about living in space and improve life on Earth.",
                image: "placeholder"
            },
            {
                text: "The ISS is a symbol of international cooperation, with astronauts from many different countries working together to explore space.",
                image: "placeholder"
            }
        ]
    }
};

// Get the current story from sessionStorage
let currentStoryId = parseInt(sessionStorage.getItem('currentStory')) || 1;

function updatePage() {
    const story = stories[currentStoryId];
    if (!story) {
        console.error('Story not found:', currentStoryId);
        return;
    }
    
    // Update total pages based on the current story
    const storyTotalPages = story.pages.length;
    const page = story.pages[currentPage - 1];
    
    document.getElementById('storyTitle').textContent = story.title;
    document.getElementById('narrationText').textContent = '';
    document.getElementById('pageIndicator').textContent = `Page ${currentPage} of ${storyTotalPages}`;
    
    // Update button states
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage === storyTotalPages;
    
    // Reset narration controls
    stopNarration();
    
    // Auto-start narration on page load
    setTimeout(() => startNarration(), 500);
}

function startNarration() {
    if (isNarrating) return;
    
    isNarrating = true;
    const story = stories[currentStoryId];
    const page = story.pages[currentPage - 1];
    const narrationElement = document.getElementById('narrationText');
    const text = page.text;
    
    // Enable/disable buttons
    document.getElementById('playBtn').disabled = true;
    document.getElementById('stopBtn').disabled = false;
    
    // Clear existing text
    narrationElement.textContent = '';
    
    // Typewriter effect
    let charIndex = 0;
    function typeChar() {
        if (charIndex < text.length && isNarrating) {
            narrationElement.textContent += text.charAt(charIndex);
            charIndex++;
            narrationTimeout = setTimeout(typeChar, 30); // Adjust speed here (lower = faster)
        } else {
            isNarrating = false;
            document.getElementById('playBtn').disabled = false;
            document.getElementById('stopBtn').disabled = true;
        }
    }
    
    typeChar();
}

function stopNarration() {
    isNarrating = false;
    clearTimeout(narrationTimeout);
    const playBtn = document.getElementById('playBtn');
    const stopBtn = document.getElementById('stopBtn');
    if (playBtn) playBtn.disabled = false;
    if (stopBtn) stopBtn.disabled = true;
}

function skipNarration() {
    stopNarration();
    const story = stories[currentStoryId];
    const page = story.pages[currentPage - 1];
    document.getElementById('narrationText').textContent = page.text;
}

function nextPage() {
    const story = stories[currentStoryId];
    const storyTotalPages = story.pages.length;
    
    if (currentPage < storyTotalPages) {
        currentPage++;
        updatePage();
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    updatePage();
});
