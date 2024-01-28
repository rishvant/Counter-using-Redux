import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, reset } from "./slice/counterSlice";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


const counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Counter: {count}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="mt-2" onClick={() => dispatch(increase())}>Increase</Button>
            <Button className="ml-2 mt-2" onClick={() => dispatch(decrease())}>Decrease</Button>
            <Button className="ml-2 mt-2" onClick={() => dispatch(reset())}>Reset</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default counter;