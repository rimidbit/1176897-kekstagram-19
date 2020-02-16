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

var createCard = function (i) { /*создаю объект*/
  return {
    url: 'photos/' + i + '.jpg',
    description: '',
    likes: randomInteger(15, 200),
    comments: generateComments()
  };
};

var createComment = function (i) { /*создаю объект с рандомным контентом*/
  return {
    avatar: 'img/avatar-' + (i + 1) + '.svg',
    message: commentsText[randomInteger(0, commentsText.length)],
    name: names[randomInteger(0, names.length)]
  };
};

var generateComments = function () { /*генерирую арумент i для предыдущей функции*/
  var comments = [];

  for (var i = 0; i < randomInteger(1, 6); i++) {
    comments.push(createComment(i));
  }
  return comments;
};

var generateCards = function () { /*генерирую массив из 25 карточек и передаю его в createCard с аргументом i*/
  var cards = [];

  for (var i = 0; i < 25; i++) {
    ++i
    cards.push(createCard(i)); /*тут в функцию createCard передается только аргумент i?*/
  }

  return cards;
};

var renderPicture = function (card) {
  var renderCard = document.querySelector('#picture').content.querySelector('.picture');

  var element = renderCard.cloneNode(true);
  element.querySelector('.picture__likes').textContent = card.likes;
  element.querySelector('.picture__comments').textContent = card.comments;
  element.querySelector('.picture__img').src = card.url;

  return element;
};

var renderPictures = function (_cards) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < _cards.length; i++) {
    fragment.appendChild(renderPicture(_cards[i]));
  }

  return fragment;
};

var cards = generateCards();

var renderCards = document.querySelector('.pictures');
renderCards.appendChild(renderPictures(cards));
