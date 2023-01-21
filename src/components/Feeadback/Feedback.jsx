export default function FeedbackOptions({ options, onLeaveFeedback}){
return (
    <>
    {options.map(btnName => (
        <button key={btnName} type='button' onClick={() => onLeaveFeedback(btnName)}>{btnName}</button>

    ))}

</>
    
)
}