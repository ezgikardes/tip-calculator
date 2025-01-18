export default function BillInput({ price, onPrice }) {

    function handleChange(e) {
        onPrice(Number(e.target.value));
    }

    return (
        <div className="bill">
            <p>How much was the bill?</p>
            <input
                type="text"
                value={price}
                onChange={(e) => {
                    handleChange(e);
                }}
            />
        </div>
    );
}
