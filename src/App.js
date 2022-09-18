import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./action/index";

const App = () => {
    const myState = useSelector((state) => state.changeTheNumber);
    const dispatch = useDispatch();
    return (
        <>
            <div className="container">
                <div className="header-container">
                    <h1>Increment and Decrement Counter</h1>
                    <h3>Using React and Redux</h3>
                </div>
                <div className="input-container">
                    <div className="quality">
                        <div className="button">
                            <p
                                className="quantity_minus"
                                title="Decrement"
                                onClick={() => dispatch(decNumber())}
                            >
                                <span>-</span>
                            </p>
                        </div>
                        <input
                            type="text"
                            name="quantity"
                            className="quantity_input"
                            value={myState}
                        />
                        <div className="button">
                            <p
                                className="quantity_plus"
                                title="Increment"
                                onClick={() => dispatch(incNumber())}
                            >
                                <span>+</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
