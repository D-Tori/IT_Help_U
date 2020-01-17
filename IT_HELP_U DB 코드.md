# IT_HELP_U DB 코드

[MYSQL Naming Conventions](https://medium.com/@centizennationwide/mysql-naming-conventions-e3a6f6219efe) 를 참고 해서 작성



* `user` 테이블 

```mariadb
CREATE TABLE user (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(50) NULL,
	name VARCHAR(50) NOT NULL,
	role ENUM('mentee', 'mentor') DEFAULT 'mentee',
	field VARCHAR(50) NULL,
    company VARCHAR(50) NULL,
    department VARCHAR(50) NULL,
    school VARCHAR(50) NULL,
    major VARCHAR(50) NULL,
    information MEDIUMTEXT NULL,
    career MEDIUMTEXT NULL,
    etc MEDIUMTEXT NULL,
    image VARCHAR(100) NULL,
    signup_type ENUM('email', 'google', 'facebook', 'kakao', 'naver') DEFAULT 'email'
);
```

> * id : 현재는 임의로 만든 고유 id, 변경 가능성 있음.
> * email : 이메일 가입 시 적는 이메일
> * password : 이메일 가입시 비밀번호
> * name : 회원의 이름
> * role : mentee, mentor 구분
> * field : 관심있는 분야 또는 멘토링할 분야
> * company : 유저의 회사 (멘토)
> * department : 유저의 부서 (멘토)
> * school : 유저의 학교 (멘티)
> * major : 유저의 전공 (멘티)
> * information : 유저 소개
> * career : 유저의 경력 또는 스펙
> * etc : 유저 기타 사항
> * image : 유저 프로필 이미지
> * signup_type : 유저 회원가입 타입. 기본 'email'



* `user_comment` 테이블

```mariadb
CREATE TABLE user_comment (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   	write_date DATE,
    content TEXT NOT NULL,
    writer_id int NOT NULL,
    receiver_id int NOT NULL,
    FOREIGN KEY (writer_id) REFERENCES user(id)
    	ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (receiver_id) REFERENCES user(id)
    	ON UPDATE CASCADE ON DELETE CASCADE
);    
```

>멘토 상세 페이지에 달리는 thanks 부분
>
>* id : 댓글 고유 아이디
>* write_date : 작성 날짜
>* content : 댓글 내용
>* writer_id : 작성자 아이디
>* receiver_id : 멘토의 아이디



* `question` 테이블

```mariadb
CREATE TABLE question (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    write_date DATE,
    title VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    writer_id int NOT NULL,
    receiver_id int NOT NULL,
    FOREIGN KEY (writer_id) REFERENCES user(id)
    	ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (receiver_id) REFERENCES user(id)
    	ON UPDATE CASCADE ON DELETE CASCADE
);    
```

> 1대1 질문 테이블
>
> * id : 질문 고유 아이디
> * write_date : 작성 날짜
> * title : 질문 제목
> * content : 질문 내용
> * writer_id : 질문 작성자 아이디
> * receiver_id : 질문을 받는 멘토의 아이디



* `project` 테이블

```mariadb
CREATE TABLE project(
   id INT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   start_date DATE NOT NULL,
   end_date DATE NOT NULL,
   information VARCHAR(100) NOT NULL,
   state ENUM('모집중', '모집완료'),
   skill VARCHAR(50) NOT NULL,
   required MEDIUMTEXT NOT NULL,
   place VARCHAR(50) NOT NULL,
   image VARCHAR(50) NOT NULL,
   number_of_opening INT NOT NULL,
   leader_id INT NOT NULL,
   FOREIGN KEY (leader_id) REFERENCES user(id) ON DELETE CASCADE
);
```

> * id : 프로젝트 고유 아이디
> * name : 프로젝트 이름
> * start_date : 프로젝트 시작 날짜
> * end_date : 프로젝트 마감 날짜
> * information : 프로젝트 소개
> * state : 프로젝트 현재 상태
> * skill : 프로젝트에서 사용하는 기술
> * required : 지원자들에게 요구하는 것
> * place : 프로젝트 모임 장소
> * image : 프로젝트 소개 이미지 또는 예상 청사진
> * number_of_opening : 모집 인원
> * leader_id : 프로젝트 개설자 아이디



* `project_comment` 테이블

```mariadb
CREATE TABLE project_comment(
   id INT PRIMARY KEY AUTO_INCREMENT,
   writer_id INT NOT NULL,
   reply_id INT,
   content MEDIUMTEXT NOT NULL,
   project_id INT NOT NULL,
   FOREIGN KEY (writer_id) REFERENCES user(id) ON DELETE CASCADE,
   FOREIGN KEY (project_id) REFERENCES project(id) ON DELETE CASCADE
);
```

> * id : 프로젝트 댓글 고유 아이디
> * writer_id : 댓글 작성자 아이디
> * reply_id : 대댓글 고유 아이디
> * content : 댓글 내용
> * project_id : 해당 댓글이 위치하는 프로젝트의 아이디



* `apply` 테이블

```mariadb
CREATE TABLE apply(
   id INT PRIMARY KEY AUTO_INCREMENT,
   participants_id INT NOT NULL,
   project_id INT NOT NULL,
   apply_date DATE DEFAULT NOW(),
   FOREIGN KEY (participants_id) REFERENCES user(id) ON DELETE CASCADE,
   FOREIGN KEY (project_id) REFERENCES project(id) ON DELETE CASCADE
);
```

>* id : 응답 고유 아이디
>* participants_id : 지원자 아이디
>* project_id : 해당 프로젝트의 아이디
>* apply_date : 응답 날짜



* `board` 테이블

```mariadb
CREATE TABLE board (
   id INT PRIMARY KEY AUTO_INCREMENT,
   title VARCHAR(50) NOT NULL,
   content MEDIUMTEXT NOT NULL ,
   tag VARCHAR(50) NOT NULL,
   view_count INT DEFAULT 0,
   like_count INT DEFAULT 0,
   writer_id INT NOT NULL,
   FOREIGN KEY (writer_id) REFERENCES user(id) ON DELETE CASCADE
);
```

> * id : 게시글 고유 아이디
> * title : 게시글 제목
> * content : 게시글 내용
> * tag : 게시글 태그 ex) HTML, React
> * view_count : 게시글을 본 횟수
> * like_count : 게시글이 받은 좋아요 수 
> * writer_id : 작성자 고유 아이디



* `board_comment` 테이블

```mariadb
CREATE TABLE board_comment(
   id INT PRIMARY KEY AUTO_INCREMENT,
   writer_id INT NOT NULL,
   reply_id INT,
   content MEDIUMTEXT NOT NULL,
   like_count INT DEFAULT 0,
   board_id INT NOT NULL,
   FOREIGN KEY (writer_id) REFERENCES user(id) ON DELETE CASCADE,
   FOREIGN KEY (board_id) REFERENCES board(id) ON DELETE CASCADE
);
```

> * id : 게시글에 달린 댓글 고유 아이디
> * writer_id : 댓글 작성자 아이디
> * reply_id : 대댓글 아이디
> * content : 댓글의 내용
> * like_count : 댓글이 받은 좋아요 수
> * board_id : 해당 댓글이 달린 게시들의 아이디



* `follow` 테이블

```mariadb
CREATE TABLE follow(
	id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    follower_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
    	ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (follower_id) REFERENCES user(id)
    	ON UPDATE CASCADE ON DELETE CASCADE
);
```

> * id : follow 관계 고유 아이디
> * user_id : **follower_id** 가 follow 하는 사람
> * follower_id : **user_Id** 를 follow 하는 사람





* `user` 테이블 더미 데이터

```mariadb
INSERT INTO `user` (`id`, `email`, `password`, `name`, `role`, `field`, `company`, `department`, `school`, `major`, `information`, `career`, `etc`, `image`, `signup_type`) VALUES
	(1, 'parkboyoung@gmail.com', NULL, '박보영', 'mentor', 'Java, JavaScript, React, HTML, CSS, Python', 'NC 소프트', '개발팀', NULL, NULL, '안녕하세요 멘티님들 *^-^* 박보영 멘토라고 합니다 만나서 반가워요', '니한 지혜는 하는 실로 피에 원질이 것이다. 가는 굳세게 것은 봄바람을 이상의 풍부하게 방황하여도,', '기타 사항입니다. 안녕하세요 감사합니다 행복하세요', NULL, 'email'),
	(2, 'ksj@gmail.com', NULL, '경수진', 'mentee', 'Java', NULL, NULL, '한국대학교', '컴퓨터 공학', 'it에 관심이 많아 가입했습니다.', NULL, NULL, NULL, 'email'),
	(3, 'hhj@gmail.com', NULL, '한효주', 'mentor', 'React, Vue', '넷마블', '개발팀', NULL, NULL, '멘티님들 방가방가', '넷마블 개발팀 2015~ 팀장', '언제든지 질문주세요', NULL, 'email'),
	(4, 'fepanbr@gmail.com', NULL, '박철현', 'mentee', 'React', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'email'),
	(5, 'hgsok3056@gmail.com', NULL, '홍기석', 'mentee', 'React', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'email'),
	(6, 'maria@gmail.com', NULL, 'Maria', 'mentor', 'Vue, HTML, CSS', '넥슨', '기획팀', NULL, NULL, '넥슨에 돈을 질러라 유저들아', '너희는 돈만 지르면 된다.', '크아아아', NULL, 'email'),
	(7, 'db@gmail.com', NULL, 'DB', 'mentor', 'JavaScript', '카카오게임즈', '개발팀', NULL, NULL, '카카오게임에도 돈 많이 써줘', '아름다운 인생이다', NULL, NULL, 'email');
```



* `user_comment` 테이블 더미 데이터

```mariadb
INSERT INTO `user_comment` (`id`, `write_date`, `content`, `writer_id`, `receiver_id`) VALUES
	(1, '2019-11-11', '감사합니다. 제가 해왔던 여러가지들을 되돌아보고 정리해 볼 필요가 있을 것 같습니다. 많은 경험들이 더 필요하겠어요. 더 많이 생각하고 고민하고 경험해보겠습니다.', 2, 1),
	(2, '2020-01-11', '감사감사요', 4, 1),
	(3, '2020-01-17', '오 좋은 답변 감사요요요', 5, 1),
	(4, '2020-01-12', '아아아아 감감사사사 무조건 감사', 4, 3),
	(5, '2020-01-17', 'thanks', 5, 6);
```

