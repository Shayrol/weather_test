import styled from "@emotion/styled";
import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Title 1",
      view: 100,
      date: "2024-10-10",
      isBookmarked: false,
    },
    {
      id: 2,
      title: "Title 2",
      view: 200,
      date: "2024-10-09",
      isBookmarked: false,
    },
    {
      id: 3,
      title: "Title 3",
      view: 300,
      date: "2024-10-08",
      isBookmarked: false,
    },
  ]);

  // 날짜 순으로 정렬하는 함수 (날짜가 최신일수록 앞에 오게)
  const sortByDate = (array) => {
    return [...array].sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  // 북마크 선택 처리 함수
  const handleBookmark = (id) => {
    // 북마크 상태 업데이트
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, isBookmarked: !item.isBookmarked } : item
    );

    // 북마크된 항목을 맨 앞으로 이동하고, 북마크 해제 시에는 날짜 순으로 다시 정렬
    const sortedData = updatedData.some((item) => item.isBookmarked)
      ? updatedData
          .filter((item) => item.isBookmarked)
          .concat(updatedData.filter((item) => !item.isBookmarked))
      : sortByDate(updatedData);

    setData(sortedData);
  };

  return (
    <Wrap>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border: 3px solid black;
  width: 800px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: #0071ff;
  border: 1px solid black;
`;
