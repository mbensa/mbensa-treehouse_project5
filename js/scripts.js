const gallery = [
  {
    href: "photos/01.jpg",
    "data-lightbox": "photo",
    "data-title": "I love hay bales. Took this snap on a drive through the countryside past some straw fields.",
    src: "photos/thumbnails/01.jpg",
    alt: "Hay Bales",
    class: "gallery-thumbnail",
  },

  {
    href: "photos/02.jpg",
    "data-lightbox": "photo",
    "data-title": "The lake was so calm today. We had a great view of the snow on the mountains from here.",
    src: "photos/thumbnails/02.jpg",
    alt: "Lake",
    class: "gallery-thumbnail",
  },

  {
    href: "photos/03.jpg",
    "data-lightbox": "photo",
    "data-title": "I hiked to the top of the mountain and got this picture of the canyon and trees below.",
    src: "photos/thumbnails/03.jpg",
    alt: "Canyon",
    class: "gallery-thumbnail",
  },

  {
    href: "photos/04.jpg",
    "data-lightbox": "photo",
    "data-title": "It was amazing to see an iceberg up close, it was so cold but didn’t snow today. ",
    src: "photos/thumbnails/04.jpg",
    alt: "Iceberg",
    class: "gallery-thumbnail",
  },

  {
    href: "photos/05.jpg",
    "data-lightbox": "photo",
    "data-title":
      "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.",
    src: "photos/thumbnails/05.jpg",
    alt: "Desert",
    class: "gallery-thumbnail",
  },

  {
    href: "photos/06.jpg",
    "data-lightbox": "photo",
    "data-title": "Fall is coming, I love when the leaves on the trees start to change color.",
    src: "photos/thumbnails/06.jpg",
    alt: "Fall",
    class: "gallery-thumbnail",
  },

  {
    href: "photos/07.jpg",
    "data-lightbox": "photo",
    "data-title": "I drove past this plantation yesterday, everything is so green!",
    src: "photos/thumbnails/07.jpg",
    alt: "Plantation",
    class: "gallery-thumbnail",
  },

  {
    href: "photos/08.jpg",
    "data-lightbox": "photo",
    "data-title": "My summer vacation to the Oregon Coast. I love the sandy dunes!",
    src: "photos/thumbnails/08.jpg",
    alt: "Dunes",
    class: "gallery-thumbnail",
  },

  {
    href: "photos/09.jpg",
    "data-lightbox": "photo",
    "data-title": "We enjoyed a quiet stroll down this countryside lane.",
    src: "photos/thumbnails/09.jpg",
    alt: "Countryside-Lane",
    class: "gallery-thumbnail",
  },

  {
    href: "photos/10.jpg",
    "data-lightbox": "photo",
    "data-title": "Sunset at the coast! The sky turned a lovely shade of orange.",
    src: "photos/thumbnails/10.jpg",
    alt: "Sunset",
    class: "gallery-thumbnail",
  },

  {
    href: "photos/11.jpg",
    "data-lightbox": "photo",
    "data-title": "I did a tour of a cave today and the view of the landscape below was breathtaking.",
    src: "photos/thumbnails/11.jpg",
    alt: "Cave",
    class: "gallery-thumbnail",
  },

  {
    href: "photos/12.jpg",
    "data-lightbox": "photo",
    "data-title":
      "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.",
    src: "photos/thumbnails/12.jpg",
    alt: "Bluebells",
    class: "gallery-thumbnail",
  },
];

$.each(gallery, function (index, item) {
  const imgEl = document.createElement("img");

  imgEl.src = item.src;
  imgEl.alt = item.alt;
  imgEl.className = item.class;

  const aEl = document.createElement("a");

  aEl.href = item.href;
  aEl.dataset.lightbox = item["data-lightbox"];
  aEl.dataset.title = item["data-title"];

  $(aEl).html(imgEl);
  $(".gallery").append(aEl);
});

// I found help withe the below on stackoverflow but I added optional chaining to check for undefined values

$(document).ready(function () {
  $("#search").keyup(function () {
    var filter = $(this).val();

    $("a").each(function () {
      if ($(this).attr("data-title")?.search(new RegExp(filter, "i")) < 0) {
        $(this).fadeOut();
      } else {
        $(this).show();
      }
    });
  });
});
