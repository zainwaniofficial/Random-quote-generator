function generateQoute(){
    const quotes = [
        // Love Quotes
        "Love is not about finding the perfect person but seeing an imperfect person perfectly.",
        "You are my heart’s greatest adventure.",
        "Love isn’t what you say; it’s what you do.",
        "Every love story is beautiful, but ours is my favorite.",
        "You’re the piece I didn’t know I was missing.",
        "I found my forever in your smile.",
        "True love is when your soul recognizes its counterpart in another.",
        "You’re my today and all of my tomorrows.",
        "In your arms, I find my peace.",
        "Love doesn’t need to be perfect; it just needs to be true.",
      
        // Sad Quotes
        "Tears are words the heart can’t express.",
        "Sometimes the person you’d take a bullet for is the one pulling the trigger.",
        "Pain changes people, but it also teaches them.",
        "Behind my smile is a story you’ll never understand.",
        "It hurts when you realize you aren’t as important to someone as you thought.",
        "The worst kind of pain is being forgotten by someone you could never forget.",
        "Sometimes, silence is the loudest cry.",
        "Broken hearts still beat; they just beat differently.",
        "Loving someone who doesn’t love you back is like hugging a cactus.",
        "It’s sad when the people you love the most become strangers.",
      
        // Happiness Quotes
        "Happiness is homemade.",
        "A smile is the prettiest thing you can wear.",
        "Happiness is not out there; it’s in you.",
        "Be happy for this moment; it’s all you truly have.",
        "Joy is the simplest form of gratitude.",
        "The key to happiness is letting go of what you can’t control.",
        "Laughter is the sunshine of the soul.",
        "Count your rainbows, not your thunderstorms.",
        "Happiness blooms from within.",
        "A little spark of kindness can ignite a fire of happiness.",
      
        // Life Quotes
        "Life is what happens when you’re busy making other plans.",
        "Make today so awesome that yesterday gets jealous.",
        "Life is a journey, not a destination.",
        "Collect moments, not things.",
        "Don’t wait for the perfect moment; take the moment and make it perfect.",
        "Life is short, so smile while you still have teeth.",
        "In the end, it’s not the years in your life that count, but the life in your years.",
        "Life isn’t about finding yourself; it’s about creating yourself.",
        "Every sunrise is an invitation to brighten someone’s day.",
        "The best things in life are free: hugs, smiles, friends, and love.",
      
        // Motivational Quotes
        "Believe in yourself, and you’re halfway there.",
        "Difficult roads often lead to beautiful destinations.",
        "Success is not final, failure is not fatal: it’s the courage to continue that counts.",
        "Dream big, work hard, stay focused, and surround yourself with good people.",
        "The only way to do great work is to love what you do.",
        "Your only limit is your mind.",
        "Small steps in the right direction can turn out to be the biggest steps of your life.",
        "Don’t stop when you’re tired; stop when you’re done.",
        "Make each day your masterpiece.",
        "You don’t have to be perfect to be amazing.",
      
        // Friendship Quotes
        "A true friend is the greatest of all blessings.",
        "Good friends are like stars; you don’t always see them, but you know they’re there.",
        "A day spent with friends is always a day well spent.",
        "Friends are the family we choose for ourselves.",
        "Friendship isn’t about whom you’ve known the longest, but who walked into your life and said, “I’m here to stay.”",
        "The best mirror is an old friend.",
        "Friends are the glue that holds the pieces of your heart together.",
        "Life is better with true friends by your side.",
        "A friend knows the song in your heart and sings it back to you when you forget the words.",
        "Friendship multiplies joy and divides sorrow.",
      
        // Inspirational Quotes
        "The best time for new beginnings is now.",
        "Stars can’t shine without darkness.",
        "The secret of getting ahead is getting started.",
        "Be the change you wish to see in the world.",
        "Don’t watch the clock; do what it does: keep going.",
        "Strive for progress, not perfection.",
        "What we think, we become.",
        "Never stop learning because life never stops teaching.",
        "Your vibe attracts your tribe.",
        "Focus on the step in front of you, not the whole staircase.",
      
        // Heartbreak Quotes
        "Hearts break, but that’s how they let the light in.",
        "You broke my heart, but not my spirit.",
        "It’s hard to forget someone who gave you so much to remember.",
        "Sometimes, goodbyes hurt the most when the story was not finished.",
        "Loving you was like chasing the wind.",
        "My heart says stay, but my mind says go.",
        "Some scars are on the heart, not the skin.",
        "The saddest thing about love is how it turns into a memory.",
        "I gave you my heart, and you broke it like it was nothing.",
        "Time heals all wounds, but some remain as scars.",
      
        // Hopeful Quotes
        "Every storm runs out of rain.",
        "Where there’s hope, there’s life.",
        "The darkest nights produce the brightest stars.",
        "Hope is the whisper that says, “Try again.”",
        "Each new day is a chance to start fresh.",
        "Life always offers you a second chance; it’s called tomorrow.",
        "Hope anchors the soul.",
        "Even the smallest ray of light can pierce the darkest room.",
        "After every storm, the sun will smile.",
        "The best is yet to come.",
      
        // Miscellaneous Quotes
        "A smooth sea never made a skilled sailor.",
        "The grass is greener where you water it.",
        "Life is tough, but so are you.",
        "Don’t be afraid to fail; be afraid not to try.",
        "Every moment is a fresh beginning.",
        "The only constant in life is change.",
        "It always seems impossible until it’s done.",
        "Happiness is not by chance but by choice.",
        "Your dreams don’t work unless you do.",
        "Be a voice, not an echo."
      ];
      
    

    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.querySelector('.para')
    .innerHTML = (` <span> ${quotes[randomIndex]} </span>`);
    
}