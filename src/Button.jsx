export default function Button({ onPrice, children, onPercentage1, onPercentage2 }) {
    function handleReset() {
        onPrice(0);
        onPercentage1(0);
        onPercentage2(0);
    }

    return <button onClick={handleReset}>{children}</button>;
}
