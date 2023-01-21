import css from 'components/Feeadback/Feadback.module.css'


export default function FeedbackOptions({ options, onLeaveFeedback}){
return (
    <>
    {options.map(btnName => (
        <button key={btnName} type='button' className={css.btn} onClick={() => onLeaveFeedback(btnName)}>{btnName}</button>

    ))}

</>
    
)
}