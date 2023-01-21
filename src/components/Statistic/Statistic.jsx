import Notification from 'components/Notification/Notification'

export default function Statistics({
    total,
    good,
    bad,
    neutral,
    positivePercentage
}){
    return (
        <>
        {total > 0 ? (
  <div>
            <h2>Statistics</h2>

        <ul>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total:{total}</li>
          <li>Positive feedback:{positivePercentage}%</li>
        </ul>
        </div>
        ) : (
            <Notification message="There is no feedback"/>
        )}
        </>
    )
}
 

  
   
  






