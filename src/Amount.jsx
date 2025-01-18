export default function Amount({ price, avPercentage }) {
    let tip = (price * avPercentage) / 100;

    let total = price + tip;

    return (
        <div className="amount">
            <p>{`You pay $${total} ($${price} + $${tip} tip)`}</p>
        </div>
    );
}
