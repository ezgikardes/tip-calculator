export default function SelectPercentage({ children, percentage, onPercentage }) {
    function handlePercentage(value) {
        if (value === "dissatisfied") {
            onPercentage(0);
        } else if (value === "okay") {
            onPercentage(5);
        } else if (value === "good") {
            onPercentage(10);
        } else {
            onPercentage(20);
        }
    }

    return (
        <div className="percentage">
            <p>{children}</p>
            <select
                value={
                    percentage === 0
                        ? "dissatisfied"
                        : percentage === 5
                            ? "okay"
                            : percentage === 10
                                ? "good"
                                : "amazing"
                }
                onChange={(e) => handlePercentage(e.target.value)}>
                <option value="dissatisfied">Dissatisfied (%0)</option>
                <option value="okay">It was okay (%5)</option>
                <option value="good">It was good (%10)</option>
                <option value="amazing">Absolutely amazing! (%20)</option>
            </select>
        </div>
    );
}