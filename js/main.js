var commentsText = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var names = [
  'Олег',
  'Кася',
  'Гиви',
  'Джон',
  'Ане4ка',
  'Жанетта',
  'Ксю',
  'Аршак',
  'Солнышко',
  'noname',
  'rimidbit'
];

var randomInteger = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

var createCard = function (i) {
  return {
    url: 'photos/' + i + '.jpg',
    description: '',
    likes: randomInteger(15, 200),
    comments: generateComments()
  };
};

var createComment = function (i) {
  return {
    avatar: 'img/avatar-' + (i + 1) + '.svg',
    message: commentsText[randomInteger(0, commentsText.length)],
    name: names[randomInteger(0, names.length)]
  };
};

var generateComments = function () {
  var comments = [];

  for (var i = 0; i < randomInteger(1, 6); i++) {
    comments.push(createComment(i));
  }
  return comments;
};

var generateCards = function () {
  var cards = [];

  for (var i = 0; i < 25; i++) {
    cards.push(createCard(i));
  }

  return cards;
};

var createPicture = function (card) {

};

var createPictures = function (_cards) {
  //хранилице

  //цыкл
     //добавляем в хранилице createPicture(_cards[i])

  // добавляем DOM
};

var cards = generateCards();

var pictureTemplate = document.querySelector('#picture');

createPictures(cards)
