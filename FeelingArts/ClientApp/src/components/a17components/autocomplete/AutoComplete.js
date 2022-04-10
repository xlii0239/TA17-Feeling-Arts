import Autocomplete from "react-autocomplete";


function AutoComplete() {
    let value = [];

    return (
        <Autocomplete
            getItemValue={(item) => item.label}
            items={clist}
            renderItem={(item, isHighlighted) =>
                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                    {item.label}
                </div>
            }
            value={value}
            onChange={(e) => value = e.target.value}
            onSelect={(val) => value = val}
        />
    );
}