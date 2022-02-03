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