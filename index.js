import { flow } from "./flow.js";
import promptSync from 'prompt-sync';
import sift from "sift";

const prompt = promptSync();
const body = {};

const start = async () => {
	let next = null;
	let count = 0;
	let currentStep = flow.steps[1];

	do {
		const question = currentStep.question;
		let answer = prompt(`${question}: `);

		for (const ans of currentStep.next.answers) {
			const test = sift(ans.condition);
			if (test(answer)) {
				currentStep = flow.steps[ans.nextStep];
				if (currentStep.bodyPath ) {
					body[currentStep.bodyPath] = answer;
				}
				break;
			}
		}
		count++;
	} while (!currentStep.submit && count < 5)
	console.log(body);
}

start();

