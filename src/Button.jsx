export default function Button({ setPrice, children, setPercentage1, setPercentage2, }) {
    function handleReset() {
        setPrice(0);
    }

    return <button onClick={handleReset}>{children}</button>;
}
