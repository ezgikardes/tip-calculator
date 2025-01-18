export default function Button({ setPrice, children }) {
    function handleReset() {
        setPrice(0);
    }

    return <button onClick={handleReset}>{children}</button>;
}
