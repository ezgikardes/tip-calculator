export default function SelectPercentage({ children, onPercentage }) {
    function handlePercentage(value) {
        if (value === "okey") {
            onPercentage(5);
        }
        if (value === "good") {
            onPercentage(10);
        }
        if (value === "amazing") {
            onPercentage(20);
        }
    }

    return (
        <div className="percentage">
            <p>{children}</p>
            <select onChange={(e) => handlePercentage(e.target.value)}>
                <option value="dissatisfied">Dissatisfied (%0)</option>
                <option value="okey">It was okay (%5)</option>
                <option value="good">It was good (%10)</option>
                <option value="amazing">Absolutely amazing! (%20)</option>
            </select>
        </div>
    );
}