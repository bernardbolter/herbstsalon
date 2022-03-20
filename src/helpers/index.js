export const evenOdd = (i) => {
    if (i % 2 === 0) {
        return 'art art-odd'
    } else {
        return 'art art-even'
    }
}

export const shuffle = (array) => {
    console.log(array)
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    console.log(array)

    return array
}

export const hexToRGB = (hex, alpha) => {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

export const randomNumber = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

export const randomNumberPosNeg = num => {
    return Math.ceil(Math.random() * num) * (Math.round(Math.random()) ? 1 : -1)
}