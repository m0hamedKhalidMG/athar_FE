// // // import React from 'react';
// // // import styled from 'styled-components';

// // // const Container = styled.div`
// // //   font-family: '29LT Riwaya', sans-serif;
// // //   padding: 20px;
// // //   direction: rtl;
// // //   background-color: #f1ede1;
// // //   min-height: 100vh;
// // //   display: flex;
// // //   justify-content: flex-start; /* تغيير الاتجاه إلى اليمين */
// // //   align-items: center;
// // //   position: relative;

// // //   @media (min-width: 1024px) {
// // //     padding: 40px;
// // //   }
// // // `;

// // // const Sidebar = styled.div`
// // //   background-color: #3b1112;
// // //   padding: 20px;
// // //   width: 300px;
// // //   color: #f1ede1;
// // //   border-radius: 15px;
// // //   text-align: right;
// // //   margin-left: auto; /* وضع البوكس على اليمين */
// // // `;

// // // const Title = styled.h2`
// // //   color: #3b1112;
// // //   font-size: 36px;
// // //   font-weight: bold;
// // //   position: absolute;
// // //   top: 20px;
// // //   right: 20px;

// // //   @media (min-width: 1024px) {
// // //     font-size: 48px;
// // //     top: 40px;
// // //     right: 40px;
// // //   }
// // // `;

// // // const LocationList = styled.ul`
// // //   list-style: none;
// // //   padding: 0;
// // // `;

// // // const LocationItem = styled.li`
// // //   margin-bottom: 10px;
// // //   font-size: 18px;
// // //   line-height: 1.8;
// // // `;

// // // const ArchaeologicalPlacesPage = () => {
// // //   return (
// // //     <Container>
// // //       <Title>الأماكن الأثرية</Title>
// // //       <Sidebar>
// // //         <LocationList>
// // //           <LocationItem>الرياض</LocationItem>
// // //           <LocationItem>القصيم</LocationItem>
// // //           <LocationItem>حائل</LocationItem>
// // //           <LocationItem>الجوف</LocationItem>
// // //           <LocationItem>تبوك</LocationItem>
// // //           <LocationItem>العلا</LocationItem>
// // //           <LocationItem>المدينة المنورة</LocationItem>
// // //           <LocationItem>ينبع</LocationItem>
// // //           <LocationItem>جدة</LocationItem>
// // //           <LocationItem>الطائف</LocationItem>
// // //           <LocationItem>عسير</LocationItem>
// // //           <LocationItem>مكة المكرمة</LocationItem>
// // //           <LocationItem>الأحساء</LocationItem>
// // //           <LocationItem>المنطقة الشرقية</LocationItem>
// // //           <LocationItem>الحدود الشمالية</LocationItem>
// // //         </LocationList>
// // //       </Sidebar>
// // //     </Container>
// // //   );
// // // };

// // // export default ArchaeologicalPlacesPage;
// // import React from 'react';
// // import styled from 'styled-components';

// // const Container = styled.div`
// //   font-family: '29LT Riwaya', sans-serif;
// //   padding: 20px;
// //   direction: rtl;
// //   background-color: #f1ede1;
// //   min-height: 100vh;
// //   display: flex;
// //   flex-direction: column; /* Stack title and sidebar vertically */
// //   align-items: flex-start; /* Align items to the right */

// //   @media (min-width: 1024px) {
// //     padding: 40px;
// //   }
// // `;

// // const Sidebar = styled.div`
// //   background-color: #3b1112;
// //   padding: 20px;
// //   width: 300px;
// //   color: #f1ede1;
// //   border-radius: 15px;
// //   text-align: right;
// //   margin-top: 20px; /* Add margin to separate from title */
// // `;

// // const Title = styled.h2`
// //   color: #3b1112;
// //   font-size: 36px;
// //   font-weight: bold;

// //   @media (min-width: 1024px) {
// //     font-size: 48px;
// //   }
// // `;

// // const LocationList = styled.ul`
// //   list-style: none;
// //   padding: 0;
// // `;

// // const LocationItem = styled.li`
// //   margin-bottom: 10px;
// //   font-size: 18px;
// //   line-height: 1.8;
// // `;

// // const ArchaeologicalPlacesPage = () => {
// //   return (
// //     <Container>
// //       <Title>الأماكن الأثرية</Title>
// //       <Sidebar>
// //         <LocationList>
// //           <LocationItem>الرياض</LocationItem>
// //           <LocationItem>القصيم</LocationItem>
// //           <LocationItem>حائل</LocationItem>
// //           <LocationItem>الجوف</LocationItem>
// //           <LocationItem>تبوك</LocationItem>
// //           <LocationItem>العلا</LocationItem>
// //           <LocationItem>المدينة المنورة</LocationItem>
// //           <LocationItem>ينبع</LocationItem>
// //           <LocationItem>جدة</LocationItem>
// //           <LocationItem>الطائف</LocationItem>
// //           <LocationItem>عسير</LocationItem>
// //           <LocationItem>مكة المكرمة</LocationItem>
// //           <LocationItem>الأحساء</LocationItem>
// //           <LocationItem>المنطقة الشرقية</LocationItem>
// //           <LocationItem>الحدود الشمالية</LocationItem>
// //         </LocationList>
// //       </Sidebar>
// //     </Container>
// //   );
// // };

// // export default ArchaeologicalPlacesPage;
// import React, { useState } from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   font-family: '29LT Riwaya', sans-serif;
//   padding: 20px;
//   direction: rtl;
//   background-color: #f1ede1;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column; /* Stack title and sidebar vertically */
//   align-items: flex-start;

//   @media (min-width: 1024px) {
//     flex-direction: row; /* ترتيب القائمة والمحتوى أفقياً */
//     padding: 40px;
//   }
// `;

// const Sidebar = styled.div`
//   background-color: #3b1112;
//   padding: 20px;
//   width: 300px;
//   color: #f1ede1;
//   border-radius: 15px;
//   text-align: right;
//   margin-top: 20px; /* Add margin to separate from title */

//   @media (min-width: 1024px) {
//     margin-top: 0;
//     margin-right: 20px; /* فصل القائمة عن المحتوى */
//   }
// `;

// const Title = styled.h2`
//   color: #3b1112;
//   font-size: 36px;
//   font-weight: bold;

//   @media (min-width: 1024px) {
//     font-size: 48px;
//   }
// `;

// const LocationList = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const LocationItem = styled.li`
//   margin-bottom: 10px;
//   font-size: 18px;
//   line-height: 1.8;
//   cursor: pointer;
//   transition: color 0.3s;

//   &:hover {
//     color: #f1ede1; /* لون النص عند التمرير */
//   }
// `;

// // مكون لعرض المحتوى بناءً على الموقع المختار
// const Content = styled.div`
//   background-color: #fff;
//   padding: 20px;
//   border-radius: 15px;
//   flex-grow: 1; /* اجعل المحتوى يمتد */
//   color: #3b1112;
//   display: ${({ isVisible }) =>
//     isVisible ? 'block' : 'none'}; /* إخفاء المحتوى إذا لم يتم اختيار أي شيء */
// `;

// const ContentImage = styled.img`
//   width: 100%;
//   max-width: 500px; /* التحكم في حجم الصورة بحيث تكون مناسبة */
//   height: auto;
//   margin-bottom: 20px;
//   border-radius: 10px;
//   object-fit: cover; /* جعل الصورة ملائمة في الحاوية */
// `;

// const ArchaeologicalPlacesPage = () => {
//   // الحالة لتتبع الموقع المختار
//   const [selectedLocation, setSelectedLocation] = useState(null);

//   // بيانات لكل موقع (يمكنك إضافة المزيد هنا)
//   const locationsData = {
//     الرياض: {
//       image: 'https://via.placeholder.com/300',
//       description:
//         'الرياض هي عاصمة المملكة العربية السعودية وتحتوي على العديد من المواقع التاريخية.',
//     },
//     القصيم: {
//       image: 'https://via.placeholder.com/300',
//       description: 'القصيم تحتوي على مواقع أثرية تعود إلى العصور القديمة.',
//     },
//     // يمكنك إضافة المزيد من المواقع هنا ...
//   };

//   return (
//     <Container>
//       <Sidebar>
//         <Title>الأماكن الأثرية</Title>
//         <LocationList>
//           {Object.keys(locationsData).map((location) => (
//             <LocationItem
//               key={location}
//               onClick={() => setSelectedLocation(location)}
//             >
//               {location}
//             </LocationItem>
//           ))}
//         </LocationList>
//       </Sidebar>

//       <Content isVisible={selectedLocation !== null}>
//         {selectedLocation && (
//           <>
//             <ContentImage
//               src={locationsData[selectedLocation].image}
//               alt={selectedLocation}
//             />
//             <p>{locationsData[selectedLocation].description}</p>
//           </>
//         )}
//       </Content>
//     </Container>
//   );
// };

// export default ArchaeologicalPlacesPage;

import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: '29LT Riwaya', sans-serif;
  padding: 20px;
  direction: rtl;
  background-color: #f1ede1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 40px;
  }
`;

const Sidebar = styled.div`
  background-color: #3b1112;
  padding: 20px;
  width: 300px;
  color: #f1ede1;
  border-radius: 15px;
  text-align: right;
  margin-top: 20px;

  @media (min-width: 1024px) {
    margin-top: 0;
    margin-right: 20px;
  }
`;

const Title = styled.h2`
  color: #3b1112;
  font-size: 36px;
  font-weight: bold;

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

const LocationList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LocationItem = styled.li`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 1.8;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #f1ede1;
  }
`;
const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Increase spacing between images */
  justify-content: center;
  margin-bottom: 20px;
`;

const Content = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  flex-grow: 1;
  color: #3b1112;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

const ImageWithDescription = styled.div`
  width: calc(33% - 20px); /* Width adjusted for three items per row */
  max-width: 300px; /* Set a maximum width */
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s ease-in-out; /* Animation for hover effect */

  &:hover {
    transform: translateY(-5px); /* Slight lift on hover for a nice effect */
  }
`;
const ImageDescription = styled.p`
  font-size: 16px;
  color: #3b1112;
  padding: 10px;
  background-color: #f1ede1; /* Match the page's background */
  border-top: 1px solid #ddd; /* Separates the image from the text */
  margin: 0;
`;
const ContentImage = styled.img`
  width: 100%;
  height: 200px; /* Set a uniform height for all images */
  object-fit: cover; /* Ensures the image covers the space evenly */
`;
const ArchaeologicalPlacesPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locationsData = {
    الرياض: {
      images: [
        require('../images/الرياض/1.png'),
        require('../images/الرياض/2.png'),
        require('../images/الرياض/3.png'),
        require('../images/الرياض/4.png'),
        require('../images/الرياض/5.png'),
        require('../images/الرياض/6.png'),
        require('../images/الرياض/7.png'),
        require('../images/الرياض/8.png'),
        require('../images/الرياض/9.png'),
        require('../images/الرياض/10.png'),
      ],
      descriptions: [
        'قرية الفاو الأثرية تُعد من أكبر وأشهر المواقع الأثرية في المملكة العربية السعودية، وتتمتع بأهمية تاريخية كبيرة، حيث كانت عاصمة لمملكة كندة في القرن الرابع قبل الميلاد، واحتفظت بمكانتها عبر القرون. تضم القرية العديد من المباني والمعابد والقبور والنقوش والرسوم الجدارية التي تعكس حضارة عظيمة كانت هنا منذ آلاف السنين.',
        'يُعد مسجد اليمامة الأثري في محافظة الخرج من أكبر المساجد في الجزيرة العربية بعد الحرمين الشريفين. يعود تاريخ بناء المسجد إلى القرن السابع الهجري، ويتميز بتصميمه الفريد ومساحته الواسعة التي كانت تتيح استقبال أعداد كبيرة من المصلين، إضافة إلى النقوش والزخارف الإسلامية الجميلة التي تزين جدرانه.',
        'أصبح موقع "المقر" القريب من محافظة وادي الدواسر من المواقع المشهورة في مجال الآثار والتاريخ في المملكة. يضم الموقع العديد من المباني الأثرية التي تعود إلى ما قبل الإسلام، كما يحتوي على منحوتات ورسومات حجرية توثق للحضارات القديمة التي مرت على المنطقة، مما يجعله وجهة سياحية مميزة.',
        'أكدت الشواهد التاريخية والمعالم الأثرية التي تم اكتشافها مؤخرًا في وادي حنيفة أن الوادي يمثل منطقة حضارية عبر الحقب التاريخية المختلفة، حيث يضم العديد من الآثار والمباني القديمة التي تعكس تطور الحياة في هذه المنطقة، بدءاً من العصر الجاهلي مروراً بالعصر الإسلامي وصولاً إلى العصر الحديث.',
        'تتميز جبال طويق بتضاريسها المتنوعة والأودية المنحدرة منها، وهي تمتد من منطقة الزلفي شمالاً حتى مشارف وادي الدواسر جنوباً. تعتبر هذه الجبال شاهداً طبيعياً على تاريخ المملكة، إذ تحتوي على العديد من النقوش والآثار التي توثق لحضارات قديمة عاشت في هذه المنطقة.',
        'تمتاز محافظات منطقة الرياض بإرث حضاري متنوع تشكل عبر التاريخ نتيجة الحضارات المتعاقبة التي شهدتها المنطقة، بدءاً من العصر الحجري حتى العصر الحديث. تضم المنطقة العديد من المواقع الأثرية والتاريخية التي تعكس التنوع الثقافي والتاريخي، مما يجعلها محطة جذب للباحثين والمهتمين بالتاريخ.',
        'في الجزء الجنوبي من مدينة الرياض، وتحديداً في حي المنصورية، يقع موقع أثري يعود إلى العصر الإسلامي المبكر، حيث تم اكتشاف مجموعة من المباني والمقابر والآبار التي توثق لتلك الفترة الزمنية. يُظهر الموقع تطور العمارة الإسلامية في المنطقة، ويُعتبر من الأماكن الهامة لدراسة التاريخ الإسلامي في المملكة.',
        'تقع منطقة عقرباء شمال مدينة الرياض، شرق بلدة "الجبيلة" و"العيينة"، وتبعد عن الرياض حوالي 40 كيلومترًا. تضم المنطقة العديد من المواقع الأثرية التي تعود إلى عصور ما قبل الإسلام، كما تحتوي على نقوش ورسومات حجرية تروي قصص الشعوب التي استوطنت هذه المنطقة قبل آلاف السنين.',
        'تقع صفاقة جنوب شرق محافظة الدوادمي، على بعد 280 كم من مدينة الرياض. تتميز هذه المنطقة بتضاريسها التي تشمل جبالًا صغيرة وحوافًا منخفضة، وهي موقع أثري هام يعود إلى العصور الحجرية، حيث تم اكتشاف أدوات حجرية ورؤوس سهام تعود إلى أكثر من 5000 سنة، مما يجعلها من أهم المواقع الأثرية في المملكة.',
        'الموقع الأثري الذي يقع غرب مدينة الرياض إلى الشمال من المزاحمية يُعرف بمكانته التاريخية وأهميته الأثرية، حيث يضم بقايا معمارية تعود إلى فترات تاريخية مختلفة، بدءًا من العصر الجاهلي وصولاً إلى العصر الإسلامي. يُعتبر الموقع نقطة جذب للباحثين في مجال الآثار لما يحتويه من شواهد تاريخية غنية.',
      ],
    },
    القصيم: {
      images: [
        require('../images/القصيم/1.jpg'),
        require('../images/القصيم/2.jpg'),
        require('../images/القصيم/3.jpg'),
        require('../images/القصيم/4.jpg'),
        require('../images/القصيم/5.jpg'),
        require('../images/القصيم/6.jpg'),
        require('../images/القصيم/7.jpg'),
        require('../images/القصيم/8.jpg'),
        require('../images/القصيم/9.jpg'),
        require('../images/القصيم/10.jpg'),
      ],
      descriptions: [
        'تقع منطقة شعيب الأدغم شرق منطقة القصيم، وتُعتبر واحدة من المواقع الأثرية المهمة في المملكة العربية السعودية. يُعَد هذا الموقع شاهدًا على تاريخ العصور الحجرية، حيث تم اكتشاف العديد من الأدوات الحجرية المميزة والنادرة التي تعود لتلك الفترات.',
        'عاش عنترة بن شداد في بلدة قصيباء ومحافظة عيون الجواء بمنطقة القصيم. كانت هذه المنطقة تتميز بجمالها الطبيعي، وقد وصفها في أشعاره، وخاصة في قصيدته الشهيرة "يادار عبلة بالجواء تكلمي".',
        'تمثل الكتابات والنقوش والرسوم الصخرية القديمة المنتشرة على صخور الجبال في المملكة العربية السعودية ثروة تاريخية ذات قيمة عالية. تُعتبر هذه الآثار من المصادر الرئيسية التي استقى منها المؤرخون الكثير مما دوّنوا عن تاريخ الجزيرة العربية وحضارتها.',
        'يعتبر درب زبيدة أحد أبرز طرق الحج والتجارة القديمة التي تمتد من الكوفة في العراق إلى مكة المكرمة. يُنسب هذا الطريق إلى زبيدة بنت جعفر المنصور، زوجة الخليفة العباسي هارون الرشيد، التي أسهمت في تطويره وتحسينه.',
        'يمتد الطريق التاريخي من البصرة إلى مكة، ويعود تاريخه إلى العصر العباسي. يشمل هذا الطريق محطتين رئيسيتين في منطقة القصيم، وهما محطة النبا ومحطة ضريه، اللتان تعتبران من المواقع المهمة في تاريخ التجارة والحج.',
        'في الأدب العربي القديم، تُشير كلمة "رامة" أو "رامتان" إلى مفهوم خاص. قد تكون هذه الكلمات تعبيرًا عن أماكن أو حالات معينة في قصائد الشعراء الجاهليين أو حتى في الكتب والمعاجم الأدبية.',
        'يتحدث عن كتل حجرية قد تكون نتيجة لتجمع الحجارة في الموقع، مما قد يدل على وجود أنشطة بشرية قديمة أو على استخدام هذه الحجارة في البناء.',
        'يُذكر وجود رسوم على الصخور، مما يعكس الجانب الفني والثقافي للحضارة التي أنشأت هذا الموقع.',
        '"مرقب عنيزة"، وهو موقع استراتيجي يقع شمال شرق مدينة عنيزة.',
        'موقع العوسجة يُعد واحدًا من المواقع الأثرية المهمة التي تحتوي على العديد من المعالم التاريخية.',
      ],
    },

    حائل: {
      images: [
        require('../images/حائل/1.jpg'),
        require('../images/حائل/3.jpg'),
        require('../images/حائل/4.png'),
        require('../images/حائل/5.jpg'),
        require('../images/حائل/6.png'),
        require('../images/حائل/7.jpg'),
      ],
      descriptions: [
        'تقع الكهيفية على مسافة 150 كيلومترًا جنوب شرق مدينة حائل، وتُعتبر واحدة من المواقع الأثرية الهامة في المنطقة. تشير الدراسات الأثرية إلى أن الكهيفية كانت موطنًا للعديد من المستوطنات القديمة، حيث يعود تاريخها إلى فترة العصر الحجري الحديث.',
        'تقع بالقرب من مدينة موقق، وتبعد حوالي 4 كم، وتشير الدراسات الأثرية إلى أن الموقع يتضمن جبلًا متوسط الارتفاع محاطًا بعدد من الهضاب الصغيرة. يحتوي هذا الجبل على منشأتين مستطيلتين تعكسان التصميم المعماري القديم في المنطقة.',
        'تتكون تضاريس الموقع من أرض منبسطة وسهلة، مما يجعلها مناسبة للسكن والزراعة في العصور السابقة. وتحيط بالقرية من الجهة الشمالية مرتفعات بركانية قليلة الارتفاع، والتي قد تكون لها تأثيرات بيئية مهمة على الحياة اليومية للسكان القدماء.',
        'تتميز منطقة حائل بثرائها الفريد في الفنون الصخرية التي تمثل إبداعات بشرية تعود لمختلف العصور، مما يجعلها سجلًا حضاريًا مهمًا للجماعات البشرية التي استوطنت المنطقة. تظهر هذه الفنون مواضيع متنوعة مثل الحيوانات، المشاهد اليومية، والرموز الدينية، مما يكشف عن الجوانب الاجتماعية والثقافية والدينية لتلك الجماعات.',
        'يقع جبل أركان إلى الجنوب الجنوبي من مدينة حائل على بعد حوالي 25 كم، ويعتبر جبلًا ضخمًا يتكون أساسًا من الحجر. يتميز هذا الموقع بوجود وادٍ يتوسطه العديد من الكتل الجرانيتية، مما يعطيه منظرًا طبيعيًا فريدًا.',
        'تقع منطقة جبة على بعد حوالي 100 كيلومتر عن وسط صحراء النفود، وتعتبر واحدة من أهم وأكبر مواقع الآثار القديمة في المملكة العربية السعودية. يُعَد موقع جبة محطة قوافل تجارية مهمة على طريق التجارة القديم، الذي كان يربط بين حضارات المملكة، بالإضافة إلى الاتصال بالأراضي السورية والعراقية.',
      ],
    },
    الجوف: {
      images: [
        require('../images/الجوف/1.jpg'),
        require('../images/الجوف/2.jpg'),
        require('../images/الجوف/3.jpg'),
        require('../images/الجوف/4.jpg'),
        require('../images/الجوف/5.jpg'),
        require('../images/الجوف/6.jpg'),
      ],
      descriptions: [
        'دومة الجندل هي عبارة عن بقايا مدينة أثرية تقع في منطقة الجوف شمال غرب المملكة العربية السعودية. يعود تاريخ المدينة إلى القرن العاشر قبل الميلاد، حيث ورد ذكرها في وثائق المملكة الأشورية في العام 845 ق م كعاصمة للمملكة العربية أدوماتو.',
        'قلعة زعبل هي قلعة أثرية تقع شمال مدينة سكاكا في منطقة الجوف في المملكة العربية السعودية. بُنيت القلعة من الحجر والطين على قمة جبل في الطرف الشمالي الغربي لمدينة سكاكا. يعود تاريخ القلعة الحالية إلى القرن 17 أو 18 م. أما أساساتها فقد بُنيت فوق أنقاض أثرية تعود للفترة النبطية في القرن الأول الميلادي.',
        'قلعة ذات الحاج هي أحد محطات طريق الحج الشامي خلال فترة الحكم العثماني. تقع القلعة في منطقة الجوف في المملكة العربية السعودية.',
        'محطة بئر بن هرماس هي إحدى محطات الخط الحديدي الحجازي خلال العهد العثماني. تقع المحطة في منطقة الجوف في المملكة العربية السعودية.',
        'أعمدة الرجاجيل هو موقع أثري يقع في ضاحية قارة جنوب سكاكا، منطقة الجوف، المملكة العربية السعودية. يتكون الموقع من خمسين مجموعة من الأعمدة الحجرية المنتصبة والمسماة بالرجاجيل (لأنها تبدو من بعيد كأنها مجموعة من الرجال). تعود هذه الأعمدة إلى الألفية الرابعة قبل الميلاد.',
        'بئر سيسرا هو بئر أثري يقع في الطرف الشمالي من مدينة سكاكا في منطقة الجوف، المملكة العربية السعودية. يعود تاريخ البئر إلى الفترة النبطية في القرن الأول الميلادي.',
      ],
    },
    تبوك: {
      images: [
        require('../images/تبوك/1.jpg'),
        require('../images/تبوك/2.jpg'),
        require('../images/تبوك/3.jpg'),
        require('../images/تبوك/4.jpg'),
        require('../images/تبوك/5.jpg'),
        require('../images/تبوك/6.jpg'),
        require('../images/تبوك/7.jpg'),
        require('../images/تبوك/8.jpg'),
        require('../images/تبوك/9.jpg'),
        require('../images/تبوك/10.jpg'),
      ],
      descriptions: [
        'تعتبر منطقة تبوك من المناطق الغنية بالتراث الأثري، حيث تحتوي على مجموعة من الرسوم الصخرية التي تُعَد من أبرز معالمها. من بين هذه الرسوم، توجد الرسوم الحيوانية في مواقع متفرقة من موقع "أبا العجل" الأثري، الواقع في جبال اللوز بمركز السرو التابع لمنطقة تبوك.',
        'تُعتبر قلعة تبوك واحدة من المحطات الهامة على طريق الحج الذي يربط بين الشام والمدينة المنورة. تتكون القلعة من مجموعة من القلاع والمحطات التي تبدأ من الحدود السعودية الأردنية وتمتد حتى المدينة المنورة لاستقبال الحجاج.',
        'تقع المحطة على ضفة وادي الأخضر جنوبي مدينة تبوك، وتبعد عنها حوالي 80 كيلومترًا. تم بناء المحطة في عام 1325 هـ.',
        'تُعتبر هذه المحطة إحدى محطات خط حديد الحجاز، وهي من المحطات الرئيسية للخط. وصل إليها أول قطار عام 1906م، مما يُشير إلى أهميتها في تطوير وسائل النقل في تلك الفترة.',
        'تُعتبر قلعة المعظم واحدة من القلاع المهمة التي كانت تُستخدم لمراقبة الحجاج وحمايتهم على طول خط سكة الحديد. تضم القلعة بركة المعظم، التي كانت تُعتبر من الأجزاء الأساسية في النظام المائي الذي يدعم القلعة.',
        'تقع القرية الأثرية إلى الشمال الغربي من مدينة تبوك بحوالي 80 كم، وتُعد من أهم المواقع الأثرية في المنطقة. يتضمن الموقع منشآت حجرية وأطلال مدينة تعود إلى تاريخ يعود إلى مطلع الألف الأول قبل الميلاد.',
        'يقع الموقع الأثري شمال شرق تبوك بحوالي 250 كم، ويتميز بوجود وحدات معمارية وبرك. يتضمن الموقع مجموعة من المنحوتات، بما في ذلك رسوم ونقوش وأدوات حجرية.',
        'تُعتبر المملكة العربية السعودية واحدة من أهم المناطق التاريخية الغنية بالآثار، حيث تتميز بتنوعها التاريخي وأشكالها المعمارية الفريدة. تمتد هذه الآثار عبر العصور المختلفة، مما يجعلها كنزًا ثقافيًا وتاريخيًا.',
        'تُعتبر بئر هداج واحدة من أبرز وأشهر الآبار في الجزيرة العربية، وتقع في منطقة محاطة بأشجار النخيل، مما يضفي عليها طابعًا مميزًا. تشتهر هذه البئر بتاريخها العريق وأهميتها في توفير المياه للمناطق المحيطة بها.',
        'القصر الأثري الذي يقع شمال تيماء يُعتبر من المعالم التاريخية الهامة، حيث يعود تاريخ بنائه إلى ما قبل الميلاد. يُظهر القصر عمق الحضارة التي ازدهرت في المنطقة، ويحتوي على قطع أثرية قديمة تتضمن نقوشات ومعادن غالية وكتابات بأبجديات أرمية وثمودية، مما يعكس تنوع الثقافات التي مرت على هذه الأرض.',
      ],
    },
    'المدينة المنورة': {
      images: [
        require('../images/المدينة المنورة/1.jpg'),
        require('../images/المدينة المنورة/3.jpg'),
        require('../images/المدينة المنورة/4.jpg'),
        require('../images/المدينة المنورة/5.jpg'),
        require('../images/المدينة المنورة/6.jpg'),
        require('../images/المدينة المنورة/7.jpg'),
        require('../images/المدينة المنورة/8.jpg'),
      ],
      descriptions: [
        'مدائن صالح، تعرف أيضاً باسم مدينة الحِجْر، هي موقع أثري يقع في محافظة العُلا التابعة لمنطقة المدينة المنورة في شمال غرب المملكة العربية السعودية. تعود معظم البقايا الأثرية في الموقع إلى عصر مملكة الأنباط في القرن الأول الميلادي. يعد الموقع أكبر مستوطنة جنوبية لمملكة الأنباط بعد البتراء في الأردن. مدائن صالح تم تسجيلها في قائمة اليونسكو للتراث العالمي في عام 2008.',
        'العلا القديمة، وتسمى أيضاً بالديرة، هي مدينة أثرية بُنيت في القرن الثالث عشر الميلادي فوق أنقاض أثرية تعود لمملكة لحيان، وهي مملكة عربية قديمة قامت في الألفية الأولى قبل الميلاد.',
        'المدينة المنورة هي أول عاصمة في تاريخ الإسلام، وثاني أقدس الأماكن لدى المسلمين بعد مكة. وهي عاصمة منطقة المدينة المنورة في المملكة العربية السعودية. يعود تاريخ تأسيس المدينة إلى القرن السادس قبل الميلاد، حيث كانت تعرف باسم يثرب. تستمد المدينة المنورة أهميتها من هجرة النبي محمد عليه الصلاة والسلام إليها وإقامته فيها. تضم المدينة المنورة أقدم ثلاثة مساجد في العالم وهي المسجد النبوي ومسجد قباء ومسجد القبلتين.',
        'محطة مدائن صالح أو محطة الحِجْر هي إحدى محطات الخط الحديدي الحجازي خلال العهد العثماني. تعتبر المحطة ثاني أكبر محطة للقطار في الحجاز بعد محطة المدينة المنورة. تقع المحطة في منطقة المدينة المنورة في المملكة العربية السعودية.',
        'محطة العلا هي إحدى محطات الخط الحديدي الحجازي خلال العهد العثماني. تقع المحطة في منطقة المدينة المنورة في المملكة العربية السعودية.',
        'محطة المدينة المنورة، وتعرف أيضاً باسم الأستصيون، هي المحطة النهائية للخط الحديدي الحجازي. افتتحت في عهد السلطان العثماني عبدالحميد الثاني في الأول من سبتمبر عام 1908 م. تقع المحطة غرب المسجد النبوي في المدينة المنورة في المملكة العربية السعودية.',
        'خيبر القديمة هي واحة ومنطقة تاريخية تقع في منطقة المدينة المنورة في المملكة العربية السعودية. لقد سكن اليهود المنطقة في الماضي، قبل أن يفتحها العرب المسلمون في العام 629 م.',
      ],
    },
    'المنطقة الشرقية': {
      images: [
        require('../images/المنطقة الشرقية/1.jpg'),
        require('../images/المنطقة الشرقية/2.jpg'),
        require('../images/المنطقة الشرقية/3.jpg'),
        require('../images/المنطقة الشرقية/4.jpg'),
        require('../images/المنطقة الشرقية/5.jpg'),
        require('../images/المنطقة الشرقية/6.jpg'),
        require('../images/المنطقة الشرقية/9.jpg'),
        require('../images/المنطقة الشرقية/10.jpg'),
      ],
      descriptions: [
        'مدينة ثاج، الواقعة على بعد حوالي 95 كيلومترًا من مدينة الرياض، تُعتبر من أهم المواقع الأثرية في المملكة العربية السعودية. تُعرف ثاج بـ "كنز الآثار" نظرًا لما تحتويه من قطع أثرية ذهبية فريدة، بما في ذلك قطع الحلي التي تعود لأكثر من 2000 عام.',
        'موقع عنة، شمال مدينة القطيف، هو من المواقع الأثرية المهمة في المملكة العربية السعودية. يقع في الركن الشمالي الغربي من الخليج العربي، ويحتوي على آثار تعود لفترات تاريخية متعددة، حيث يُظهر الاستيطان الذي امتد من القرن الخامس قبل الميلاد حتى القرن السادس الميلادي.',
        'تقع جزيرة جنة في الركن الشمالي الغربي من خليج العربي، وتبعد حوالي 35 كيلومترًا عن مدينة القطيف. تعتبر هذه الجزيرة من المواقع الأثرية المهمة، حيث تم اكتشاف آثار استيطان تمتد من القرن الخامس قبل الميلاد وحتى القرن السادس الميلادي.',
        'تعتبر منطقة الُبيل من المواقع المهمة التي تم اكتشافها من خلال مشاريع التنقيب الأثري، حيث تم العثور على آثار تعود إلى فترات تاريخية مختلفة. تشمل الاكتشافات آثارًا تعود إلى القرن الثالث قبل الميلاد، إضافة إلى مواقع أخرى مثل "مردومة" التي تعود للقرن الهجري الأول.',
        'في ضاحية الراكة، تم اكتشاف قرية أثرية تعود لفترة صدر الإسلام، تتكون من مجموعة من المنازل يقدر عددها حاليًا بنحو 20 منزلاً، موزعة على ثلاث مجموعات متباعدة. تحتوي هذه المنازل على غرف ووحدات سكنية متنوعة، بالإضافة إلى مجموعة من الأدوات المنزلية والأثرية.',
        'تقع قلعة تاروت شمال غرب حي الديرة على تل تاروت وسط جزيرة تاروت في محافظة القطيف. تشكلت هذه القلعة كحصن دفاعي لصد أي هجوم خارجي، وقد عُثر في الموقع على آثار تعود لفترة حضارة العبيد، التي تمتد من 4300 إلى 4000 قبل الميلاد، بالإضافة إلى آثار أخرى تعود لفترة بار، المرتبطة بعصر حضارة دلمون، التي تعود إلى الألف الثالث قبل الميلاد.',
        'تقع منطقة الدوسرية في جنوب الخليج، وتتميز بالكثبان الرملية التي تغطي بقايا الأحجار في مدينة الُبيل. تُظهر الاكتشافات الأثرية في الموقع، بما في ذلك الأدوات النارية، والفخار، والعظام، والأصداف، وجود مستوطنات قديمة.',
        'مدينة الظهران تحتضن موقعًا أثريًا يعود إلى الألف الثالث قبل الميلاد، يُعتبر مستوطنة كبيرة ذات أهمية تاريخية. بجوار هذا الموقع، يوجد حقل مدافن تاللية يحتوي على حوالي 900 مدفن، مما يدل على وجود مجتمع قديم في المنطقة.',
      ],
    },
    'مكة المكرمة': {
      images: [
        require('../images/مكة المكرمة/1.png'),
        require('../images/مكة المكرمة/2.png'),
        require('../images/مكة المكرمة/3.png'),
        require('../images/مكة المكرمة/4.png'),
        require('../images/مكة المكرمة/5.png'),
        require('../images/مكة المكرمة/6.png'),
        require('../images/مكة المكرمة/7.png'),
      ],
      descriptions: [
        'المسجد الحرام الذي يتوسط صحنه الكعبة المشرفة، التي تعتبر قبلة الصلاة لدى المسلمين، ويقصدها الملايين من الحجاج والمعتمرين على مدار العام ولا يتوقف الطواف بها على مدار الساعة إلا لأداء فريضة الصلاة.',
        'يرتبط جبل ثور الذي يوجد فيه غار ثور، بحدث كبير من سيرة النبي محمد صلى الله عليه وعلى آله وسلم، لأنه المكان الذي اختبأ به أثناء الهجرة النبوية إلى المدينة المنورة، ومكث فيه النبي وأبو بكر الصديق، لمدة ثلاث ليالٍ كما تحدثت كتب السير. ويقع الجبل جنوب شرقي مكة المكرمة ويبعد عن المسجد الحرام ما يقارب 4 كلم، وغار ثور عبارة عن صخرة مجوفة أعلى الجبل، وله فتحتان، الأولى من الشرق والثانية من الغرب، وتلك الفتحة التي دخل منها النبي وصاحبه أبو بكر الصديق.',
        'جبل الرحمة أو جبل عرفة، يقع على بعد 20 كيلومترا شرقي مدينة مكة المكرمة، على الطريق بين مكة المكرمة ومدينة الطائف، وعلى بعد نحو 10 كيلومترات من مشعر مِنى، و6 كيلومترات من المزدلفة.',
        'يقع في مشعر مزدلفة، وتحديدا في وسط المسافة التي تقع بين مسجد نمرة في جبل عرفات وبين مسجد الخيف في منطقة مِنى، ويفيض الحجيج إلى ذلك المسجد بعد غروب شمس يوم عرفة.',
        'عبارة عن مجرى مائي، ويعتبر من أبرز المعالم التاريخية في مكة، لأنه كان أهم مصدر للمياه العذبة للحجاج وأيضا كان محطة استراحة للحجاج القادمين لأداء المناسك في مكة المكرمة.',
        'يقع بجوار جبل النور، أشهر المعالم في مكة المكرمة الذي شهد نزول الوحي على سيدنا وحبيبنا محمد صلى الله وسلم عليه وعلى آله وسلم، ويسمح حي حراء للزوار بتجربة ثقافية وتاريخية وترفيهية، حيث تقدر مساحته بنحو 67 ألف م2.',
        'يعتبر واحد من المواقع التاريخية الهامة التي يقصدها السياح والمعتمرون في مكة المكرمة، حيث يشهد على مدار اليوم توافد الزوار من جميع الأجناس.',
      ],
    },
    عسير: {
      images: [
        require('../images/عسير/1.jpg'),
        require('../images/عسير/2.jpg'),
        require('../images/عسير/3.png'),
        require('../images/عسير/4.jpg'),
        require('../images/عسير/5.jpg'),
        require('../images/عسير/6.jpg'),
        require('../images/عسير/7.jpg'),
        require('../images/عسير/8.jpg'),
        require('../images/عسير/9.jpg'),
        require('../images/عسير/10.jpg'),
      ],
      descriptions: [
        'يعد موقع "جرش الأثري" في محافظة أحد رفيدة شرق منطقة عسير من المواقع المهمة في تاريخ الجزيرة العربية. يمثل هذا الموقع مرحلة ما قبل الميلاد، وقد استمر الاستيطان فيه حتى الفترة الإسلامية. يُعتبر جرش معاصرًا لموقع الأخدود في نجران، ويتميز بأنه كان مركزًا تجاريًا وصناعيًا واقتصاديًا مهمًا. قدم هذا الموقع خدمات كبيرة لتجارة العبور، حيث كانت القوافل التجارية تمر عبره على طريق التجارة القديم، مما يعكس دوره الحيوي في الربط بين مناطق مختلفة في شبه الجزيرة العربية.',
        'أظهرت الأبحاث الأثرية الحديثة في موقع العبالء، الواقع في الشمال الغربي من محافظة بيشة في منطقة عسير، العثور على قطع أثرية تعود إلى القرن الرابع قبل الميلاد. تكشف هذه الاكتشافات عن حضارة العبالء التي كانت تُمارس تعدين الذهب والنحاس، مما يعكس مستوى الثراء والتطور الذي تمتع به سكان المنطقة خلال تلك الفترة. تستمر آثار هذه الحضارة حتى العصر العباسي، مما يشير إلى أهمية الموقع تاريخياً وثقافياً.',
        'يمتد طريق الحدب لمسافة 20 كم مربع ويصل بين مركز السرح ومركز القوباء، حيث يتواجد عدد من المواقع الأثرية المنتشرة على طول الطريق. تتوزع هذه المواقع الأثرية، والتي يزيد عددها عن 15 موقعًا، بين قبور حجرية، رسوم صخرية، نقوش وكتابات إسلامية، بالإضافة إلى دوائر حجرية. تعكس هذه الاكتشافات التراث الثقافي والتاريخي للمنطقة.',
        'تتميز الجزيرة العربية بموقعها الجغرافي الفريد الذي جعلها مركزًا للحضارات المختلفة على مر العصور. هذا التنوع الحضاري ساهم في ازدهار المنطقة، حيث تزخر بعدد من الدروب التاريخية التي تعكس غناها الثقافي والتاريخي.',
        'تُروى قصة الصحابة مع الرسول صلى الله عليه وسلم حين قال المقداد بن الأسود: "لو سرت بنا إلى برك الغماد لسرنا معك." وقد ورد ذكر هذا الموقع التاريخي المهم، حيث يُشير إلى الرحلة التي قام بها أبو بكر رضي الله عنه عندما أراد الهجرة من مكة إلى الحبشة، حيث مرّ فعليًا عبر برك الغماد. تعكس هذه الأحداث ولاء الصحابة واستعدادهم للقتال في سبيل الله مع النبي صلى الله عليه وسلم.',
        'تعتبر محافظة تثليث في منطقة عسير من أهم الأودية في المملكة العربية السعودية، حيث يُعد وادي تثليث من الأطول والأشهر. يتميز الوادي بما يحتويه من نقوش أثرية ومواقع تاريخية وتراثية، مما يجعله مصدرًا غنيًا للأدب والتاريخ والجغرافيا.',
        'تتميز مناطق شرق الواجهة في المملكة العربية السعودية، مثل نماص وتنومة، بوجود عدد كبير من المواقع الأثرية التي لا تزال باقية حتى اليوم. تعكس هذه المواقع التاريخية غنى التراث الثقافي والتاريخي للمنطقة.',
        'يُعتبر وادي نعام وروافده من المواقع المهمة والغنية بالتراث الثقافي في المملكة العربية السعودية. يتميز هذا الوادي بتنوع الرسوم الصخرية والنقوش العربية القديمة، بالإضافة إلى النقوش الإسلامية التي تصور جوانب الحياة الاجتماعية ومظاهرها. تعكس هذه النقوش أنماط حياة الإنسان في تلك الفترات، بما في ذلك الصيد، والمعارك، والمعتقدات الدينية، والحيوانات التي كانت تعيش في المنطقة.',
        'هذا الموقع التاريخي هو عبارة عن هضبة صخرية تقع شمال شرق مدينة أبها، على بُعد حوالي 7 كم. يُشتهر الموقع بنقوشه الثمودية، التي تعكس تاريخ المنطقة وتراثها الثقافي.',
        'يُعتبر وادي عيا، الواقع إلى الشرق من مركز بللسمر في منطقة عسير، واحدًا من أشهر المواقع الأثرية، حيث يبعد حوالي 50 كيلومترًا عن المركز. يتميز الوادي بتعدد آثاره، بما في ذلك القصور والحصون والمقابر، مما يعكس غنى تراث المنطقة التاريخي والثقافي.',
      ],
    },
    ينبع: {
      images: [require('../images/ينبع/2.webp')],
      descriptions: [
        'ينبع البلد هي المنطقة القديمة في مدينة ينبع، حيث تحتضن جميع الأحياء التاريخية في المدينة، وتتميز هذه المنطقة بمجموعة من المباني ذات الطابع الثقافي والتاريخي، حيث تبرز المشربيات العربية الخشبية كعناصر بارزة في هذه الهندسة المعمارية الفريدة. وتحوي ينبع البلد على مجموعة من الآثار التي تعكس تاريخ هذه المنطقة عبر العصور، ويتجلى ذلك في الآثار الأثرية والتحف القديمة التي تعود إلى الفترات الزمنية المختلفة، مما يعكس غنى التراث والتأريخ الذي شهدته المنطقة على مر العصور، من القديم وصولاً إلى الوقت الحاضر.',
      ],
    },
  };

  return (
    <Container>
      <Sidebar>
        <Title>الأماكن الأثرية</Title>
        <LocationList>
          {Object.keys(locationsData).map((location) => (
            <LocationItem
              key={location}
              onClick={() => setSelectedLocation(location)}
            >
              {location}
            </LocationItem>
          ))}
        </LocationList>
      </Sidebar>

      <Content isVisible={selectedLocation !== null}>
        {selectedLocation && (
          <>
            <ImagesContainer>
              {locationsData[selectedLocation].images.map((image, index) => (
                <ImageWithDescription key={index}>
                  <ContentImage
                    src={image}
                    alt={`${selectedLocation} - ${index + 1}`}
                  />
                  <p>{locationsData[selectedLocation].descriptions[index]}</p>
                </ImageWithDescription>
              ))}
            </ImagesContainer>
            <p>{locationsData[selectedLocation].description}</p>
          </>
        )}
      </Content>
    </Container>
  );
};

export default ArchaeologicalPlacesPage;
