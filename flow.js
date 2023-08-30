export const flow = {
	steps: {
		1: {
			name: 'step #1',
			question: 'type a or b',
			answer: null,
			next: {
				answers: [
					{
						condition: { $eq: 'a' },
						nextStep: 2
					},
					{
						condition: { $eq: 'b' },
						nextStep: 3
					},
				]
			}
		},
		2: {
			name: 'step #2',
			question: 'andy or bob',
			answer: null,
			next: {
				answers: [
					{
						condition: {$eq: 'andy'},
						nextStep: 4
					},
					{
						condition: {$eq: 'bob' },
						nextStep: 5
					},
				]
			}
		},
		3: {
			name: 'pet',
			question: 'name cat or dog',
			answer: null,
			next: {
				answers: [
					{
						condition: {$eq: 'cat'},
						nextStep: 4
					},
					{
						condition: {$eq: 'dog'},
						nextStep: 5
					},
				]
			}
		},
		4: {
			name: 'step #4',
			question: 'if finish - type: 5',
			answer: null,
			next: {
				answers: [
					{
						condition: {$eq: 'Andy'},
						nextStep: 4
					},
					{
						condition: { $eq: '5' },
						nextStep: 5
					},
				]
			}
		},
		5: {
			question: 'last step',
			submit: true,
			name: 'step #5',
			next: 'submit',
		},
	}
};
