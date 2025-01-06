export const  Stars = ({rating}) => {
    const ratingData = Array.from({length:5}, (elem, index) => {
        const number = index + 0.5
        return (
            <span key={index} >
                {
                    rating >= index + 1 ? <i class="bi bi-star-fill"></i> : rating >= number ? <i class="bi bi-star-half"></i> : <i class="bi bi-star"></i>
                }

            </span>
        )
    })
    
    return (
        <>
        <span >{ratingData}</span>
        </>
    )
}