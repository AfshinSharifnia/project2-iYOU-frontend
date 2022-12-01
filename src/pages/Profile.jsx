import React from "react";

const Profile = () => {
  return (
    <div className="student-profile py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-header bg-transparent text-center">
                <img
                  className="profile_img"
                  src="https://source.unsplash.com/600x300/?student"
                />
                <h3>Chelsea Mansoff</h3>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  <strong className="pr-1">Birthday:</strong>{profileDB.birthDate}
                </p>
                <p className="mb-0">
                  <strong className="pr-1">Pronouns:</strong>{profileDB.pronouns}
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-header bg-transparent border-0"></div>
              <div className="card-body pt-0">
                <table className="table table-bordered">
                  <tr>
                    <th width="300%">{icebreakerQs[0]}</th>
                    <td width="10%">:</td>
                    <td>{profileDB.q0}</td>
                  </tr>
                  <tr>
                    <th width="300%">{icebreakerQs[1]}</th>
                    <td width="10%">:</td>
                    <td>{profileDB.q1}</td>
                  </tr>
                  <tr>
                    <th width="300%">{icebreakerQs[2]}</th>
                    <td width="10%">:</td>
                    <td>{profileDB.q2}</td>
                  </tr>
                  <tr>
                    <th width="300%">{icebreakerQs[3]}</th>
                    <td width="10%">:</td>
                    <td>{profileDB.q3}</td>
                  </tr>
                  <tr>
                    <th width="300%">{icebreakerQs[4]}</th>
                    <td width="10%">:</td>
                    <td>{profileDB.q4}</td>
                  </tr>
                  <tr>
                  <th width="300%">{icebreakerQs[5]}</th>
                    <td width="10%">:</td>
                    <td>{profileDB.q5}</td>
                  </tr>
                  <tr> <th width="300%">{icebreakerQs[6]}</th>
                    <td width="10%">:</td>
                    <td>{profileDB.q6}</td>
                    </tr>
                    <tr> <th width="300%">{icebreakerQs[7]}</th>
                    <td width="10%">:</td>
                    <td>{profileDB.q7}</td>
                  </tr>
                  <tr> <th width="300%">{icebreakerQs[8]}</th>
                    <td width="10%">:</td>
                    <td>{profileDB.q8}</td>
                  </tr>
                  <tr> <th width="300%">{icebreakerQs[9]}</th>
                    <td width="10%">:</td>
                    <td>{profileDB.q9}</td>
                  </tr>
                  <tr> <th width="300%">{icebreakerQs[10]}</th>
                    <td width="10%">:</td>
                    <td>{profileDB.q10}</td>
                  </tr>
                  <tr> <th width="300%">{icebreakerQs[11]}</th>
                    <td width="10%">:</td>
                    <td>{profileDB.q11}</td>
                  </tr>
                  <tr> <th width="300%">{icebreakerQs[12]}</th>
                    <td width="10%">:</td>
                    <td>{profileDB.q12}</td>
                    </tr>

                </table>
              </div>
            </div>

            <div style={{ height: "15px" }}></div>

            <div className="card shadow-sm">
              <div className="card-header bg-transparent border-0">
                <h3 className="mb-0">
                  <i class="far fa-clone pr-1"></i>Career Blueprint
                </h3>
              </div>

              <div className="card-body pt-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;