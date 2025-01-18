export default function Amount({ price, avPercentage }) {
    let tip;
    tip = (price * avPercentage) / 100;

    let total;
    total = price + tip;

    return <p>{`You pay $${total} ($${price} + $${tip} tip)`}</p>;
}
