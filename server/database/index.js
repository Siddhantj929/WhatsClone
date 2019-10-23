const mongoose = require('mongoose');

mongoose.connect(
	`mongodb+srv://${'WhatsClone'}:${'6dmalFbDym7TQqEW'}@project-ppgo7.mongodb.net/${'WhatsClone'}?retryWrites=true`,
	{ useNewUrlParser: true },
	(err) => {
		if (err) console.log(err);
		else console.log('Database connected..');
	}
);
