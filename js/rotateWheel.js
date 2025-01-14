const uniqSkins = [
    {
        id: 1,
        title: "AK-47 | Vulcan",
        rarity: "Ancient",
        price: 500,
    },
    {
        id: 2,
        title: "USP-S | Overgrowth",
        rarity: "Mythical",
        price: 70,
    },
    {
        id: 3,
        title: "AK-47 | Case Hardened",
        rarity: "Ancient",
        price: 2000,
    },
    {
        id: 4,
        title: "AWP | BOOM",
        rarity: "Legendary",
        price: 600,
    },
    {
        id: 5,
        title: "AK-47 | Vulcan",
        rarity: "Ancient",
        price: 500,
    },
    {
        id: 6,
        title: "M4A1-S | Golden Coil",
        rarity: "Ancient",
        price: 400,
    },
    {
        id: 7,
        title: "AK-47 | Redline",
        rarity: "Legendary",
        price: 350,
    },
    {
        id: 8,
        title: "★ Butterfly Knife | Freehand",
        rarity: "Gold",
        price: 1200,
    },
    {
        id: 9,
        title: "AK-47 | Blue Laminate",
        rarity: "Mythical",
        price: 50,
    },
    {
        id: 10,
        title: "M4A4 | Radiation Hazard",
        rarity: "Industrial",
        price: 100,
    },
    {
        id: 11,
        title: "★ Stiletto Knife | Slaughter",
        rarity: "Gold",
        price: 700,
    },
    {
        id: 12,
        title: "★ Flip Knife | Marble Fade",
        rarity: "Gold",
        price: 600,
    },
    {
        id: 13,
        title: "★ Ursus Knife | Marble Fade",
        rarity: "Gold",
        price: 550,
    },
    {
        id: 14,
        title: "★ Falchion Knife | Marble Fade",
        rarity: "Gold",
        price: 300,
    },
    {
        id: 15,
        title: "★ Talon Knife | Marble Fade",
        rarity: "Gold",
        price: 1100,
    },
    {
        id: 16,
        title: "Desert Eagle | Printstream",
        rarity: "Ancient",
        price: 200,
    },
]
const container = document.querySelector(".orbit")
const numberOfBlocks = 19
const radius = 1000
const totalSkins = [...uniqSkins, ...uniqSkins]

const rarityShadowColor = {
    Industrial: "#67A4FF",
    Mythical: "#753FFF",
    Legendary: "#FF67FF",
    Ancient: "#f00",
    Gold: "#FFAF1A",
}

for (let i = 0; i < numberOfBlocks; i++) {
    const angle = (360 / numberOfBlocks) * i
    const radians = (angle * Math.PI) / 180
    const x = radius * Math.cos(radians)
    const y = radius * Math.sin(radians)

    const block = document.createElement("div")
    block.className = "wheel__block"
    block.style.left = `${1000 + x}px`
    block.style.top = `${1000 + y}px`
    block.style.setProperty("--rotate", `${angle + 180}deg`)
    block.innerHTML = `
        <div class="wheel__block_img">
            <img src="https://sap-sap.ru/img/skins/${
                totalSkins[i]?.id
            }.png" alt="skin" class="wheel__block__img" />
            <span class="wheel__shadow" style="background-color: ${
                rarityShadowColor[totalSkins[i].rarity]
            };"></span>
        </div>
        <p class="wheel__block__text">${totalSkins[i]?.title}</p>
        <div class="wheel__block__desc">Factory new</div>
    `
    container.appendChild(block)
}
