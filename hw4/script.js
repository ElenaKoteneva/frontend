import { greet } from "./modules/greet.js";
import { myName } from "./modules/greet.js";

import { celsiusToFahrenheit } from "./modules/temperature.js"
import { calculateFallDistance } from "./modules/fallDistance.js"
import { calculateAverage } from "./modules/average.js"
import { concatStrings } from "./modules/strings.js"

greet(myName);
celsiusToFahrenheit(25);
calculateFallDistance(1);
calculateAverage(1, 2, 3);
concatStrings("Привет", "мир");
