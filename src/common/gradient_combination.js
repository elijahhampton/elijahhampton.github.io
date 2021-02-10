const gradients = [
    "linear-gradient(to right top, #FFFFFF, #F0F8FF)",
    "linear-gradient(to right top, #FFFFFF, #FFF0F5)",
    "linear-gradient(to right top, #FFFFFF, #FAFAD2)",
    "linear-gradient(to right top, #FFFFFF, #FFA07A)",
    "linear-gradient(to right top, #FFFFFF, #FFEFD5)",
    "linear-gradient(to right top, #FFFFFF, #6A5ACD)",
]


const getRandomGradient = () => {
    return gradients[Math.floor(Math.random() * Math.floor(gradients.length))];
}

export default getRandomGradient;
