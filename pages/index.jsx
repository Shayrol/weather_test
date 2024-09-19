// S3 정적 페이지 (임시)

export default function MyProfilePage() {
  return (
    <div>
      <h2>S3 정적 페이지 입니다.</h2>
      <p>현재 페이지는 https로 SSL/TLS 인증서를 통해 보안을 했습니다.</p>
      <ul>
        <li>도매인 chan-profile.shop을 등록을 해주고</li>
        <li>ACM에서 SSL/TLS 인증서 생성을 해준다.</li>
        <li>
          CloudFront 생성은 원본 주소인 S3 입력을 해주고 ACM 인증된 인증서를
          포함해서 생성을 한다.
        </li>
        <li>
          그럼 CloudFront 주소가 생성이 되는데 접속을 하면 https로 S3 배포된
          페이지로 이동이 된다.
        </li>
        <li>
          다시 도메인으로 와서 A 레코드에 CDN(CloudFront) 주소로 설정하면
          https://chan-profile.shop/ 로 접속이 된다. 기존 http로만 접속이
          가능했음
        </li>
      </ul>
      <p>
        날씨 웹은 ec2를 통해 배포 예정이며 /weather를 통해 접속을 할 수
        있습니다.
      </p>
    </div>
  );
}
