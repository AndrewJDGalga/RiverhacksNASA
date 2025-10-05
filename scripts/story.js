// Story Management
let currentPage = 1;
let isNarrating = false;
let narrationTimeout;

const stories = {
    1: {
        title: "Solar Flares and the Northern Lights",
        pages: [
            {
                text: "It was a cozy evening, and Luna and Leo were getting ready for bed in their pajamas. Their bedroom had a huge skylight window that showed the beautiful night sky. Luna stared out the window and suddenly gasped. 'Leo, look! The sky's glowing green and purple! It's like it's dancing!' Leo rushed over, his eyes wide. 'Whoa, maybe it's magic! Why are the lights moving like that?' A warm golden light filled the room, forming the shape of a friendly astronaut. 'Howdy, explorers! I'm Astro, the Astronaut. What you're seeing isn't magic—those lights are called auroras! What you are seeing is called space weather!' Luna looked confused. 'Space… weather? Like it's raining stars?' Astro chuckled warmly. 'Not quite! But it does come from our star, the Sun.'",
                image: "placeholder"
            },
            {
                text: "'Space weather is what happens when the Sun sends energy and particles flying through space. Just like we have storms on Earth, the Sun has its own storms!' Leo's jaw dropped. 'Wait—the Sun gets stormy?' 'Oh yes!' Astro replied enthusiastically. 'Sometimes it bursts out waves of heat and light called solar flares, and strong gusts called solar winds!' Astro tapped his helmet three times, and suddenly their window shimmered and transformed into a glowing portal filled with swirling stars. 'Want to see where it all begins?' he asked with a smile. Luna and Leo looked at each other with excitement and shouted together, 'Yes, please!'",
                image: "placeholder"
            },
            {
                text: "The kids grabbed Astro's hands, and together they floated through the starry tunnel of their window-portal, surrounded by glowing planets and twinkling stars. Luna pointed ahead in amazement. 'Whoa! It's so bright! Is that really the Sun?' 'Sure is!' Astro confirmed. 'It's about 93 million miles away from Earth. The Sun is like a giant engine, always moving and bubbling with energy.' Leo watched as massive flames shot out from the Sun's surface. 'Look at those flames shooting out!' he exclaimed. Astro nodded. 'Those are solar flares! Let's meet one up close.'",
                image: "placeholder"
            },
            {
                text: "A sparkling, fiery figure twirled past them, glowing brilliant gold and orange like a cosmic dancer. 'Hello there! I'm Flara the Solar Flare! I erupt when magnetic energy in the Sun snaps and releases light and heat!' Astro explained further, 'That's called magnetic reconnection. NASA scientists measure flares from A to X—X is the strongest.' Luna was mesmerized. 'You look like fireworks!' Flara spun gracefully. 'That's right, but my spark can travel all the way to Earth! I can make radio signals messy or even cause power problems.' Leo thought for a moment. 'So you're like… a space storm?' 'Exactly!' Astro confirmed. 'When Flara gets excited, she sends energy rushing through space!' Flara added with a cheerful glow, 'But don't worry—I help make beautiful auroras, too!'",
                image: "placeholder"
            },
            {
                text: "Soft, glowing breezes began swirling around them, carrying sparkles like glitter through space. 'Whoosh! Hi there! I'm Wyn the Solar Wind! I blow streams of charged particles from the Sun all the way across space!' Astro gestured to the flowing streams of light. 'When Wyn blows too strong, she pushes against Earth's magnetic field and affects satellites and GPS.' Leo watched the particles flowing past. 'You move things without touching them!' Wyn's voice was calm and breezy. 'Exactly! My wind is made of energy, not air!' Luna smiled with wonder. 'Wow! So even though we can't see you, you're powerful!'",
                image: "placeholder"
            },
            {
                text: "As they continued their journey, they looked ahead and saw a massive glowing bubble swirling toward Earth. Luna pointed nervously. 'What's that big glowing bubble?' Astro's voice became more serious. 'That's a coronal mass ejection, or CME for short. It's a massive cloud of plasma traveling millions of miles per hour!' Leo looked worried. 'Is it dangerous?' 'Sometimes,' Astro replied. 'When CMEs reach Earth, they can cause geomagnetic storms that affect our technology.' Luna asked, 'Is there someone or a team that watches for these?' Astro smiled reassuringly. 'Yes! NASA missions like SOHO and SDO observe the Sun 24/7, so scientists can warn us in time and keep everyone safe.'",
                image: "placeholder"
            },
            {
                text: "The group floated closer to Earth, where shimmering, colorful lines surrounded the entire planet like a protective bubble. Astro pointed to the beautiful display. 'See those lines? That's Earth's magnetosphere! It's like a superhero shield that protects us from too much energy from space.' Wyn added, 'When I push too hard, the shield bends and shakes!' Astro continued, 'That's why scientists use NASA missions like MMS and THEMIS to study how our magnetosphere responds to space storms.' Luna's eyes lit up. 'So the Earth wears armor?' 'Exactly!' Astro confirmed proudly. 'Without it, solar storms could knock out power, GPS, and even our internet.' Leo grinned. 'Wow! That's pretty cool! Good thing we have Earth's armor!'",
                image: "placeholder"
            },
            {
                text: "Suddenly, streams of color began swirling around Earth—brilliant greens, purples, and blues dancing gracefully across the sky near the poles. Astro gestured to the magnificent display. 'When charged particles collide with Earth's atmosphere, they excite atoms that release light—that's how auroras form!' Luna gasped with recognition. 'So that's what we saw from our window!' Wyn's voice whispered through the breeze. 'That's me saying hello!' Flara added with a sparkle, 'And a little sparkle from me, too!' Astro smiled warmly at the children. 'Every color tells a story—a connection between Earth and the Sun.' The kids waved goodbye to their new friends as the beautiful auroras danced around them.",
                image: "placeholder"
            },
            {
                text: "The portal slowly faded, and Luna and Leo found themselves back in their cozy bedroom, tucked into their beds. Their eyes were still wide with wonder from their incredible journey. 'That was amazing!' Luna exclaimed. 'I never knew space had weather!' Leo bounced excitedly in his bed. 'I want to learn more about solar flares and space storms!' Both kids looked at each other and declared together, 'We want to work for NASA one day!' Astro, beginning to fade back into golden starlight, smiled at them one last time. 'Keep asking questions and looking up. The more we learn about space weather, the better we can protect our planet.' He waved as he slowly disappeared into sparkles of light. Luna and Leo lay back in their beds, their minds full of auroras, solar flares, and the amazing science of space weather. They couldn't wait to learn more!",
                image: "placeholder"
            },
            {
                text: "Want to learn more about space weather? Astro has some amazing resources for you! Check out these NASA websites: • NASA – Solar Storms and Flares • NASA – Space Weather Focus Area • NASA SVS – How Solar Flares Affect Earth. You can also check out real-time space weather at: https://www.spaceweather.gov/ Keep exploring, young scientists! The universe is full of wonders waiting to be discovered. Remember, every time you see the Northern Lights, you're witnessing the incredible connection between our Sun and Earth. Who knows—maybe one day YOU'LL be the scientist helping NASA study space weather and protect our planet!",
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
