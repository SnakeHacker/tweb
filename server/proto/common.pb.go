// Code generated by protoc-gen-go. DO NOT EDIT.
// source: common.proto

package proto

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type Error int32

const (
	Error_NO_ERROR                     Error = 0
	Error_UNKNOWN_ERROR                Error = 1
	Error_INTERNAL_ERROR               Error = 2
	Error_INVALID_USERNAME_OR_PASSWORD Error = 3
)

var Error_name = map[int32]string{
	0: "NO_ERROR",
	1: "UNKNOWN_ERROR",
	2: "INTERNAL_ERROR",
	3: "INVALID_USERNAME_OR_PASSWORD",
}

var Error_value = map[string]int32{
	"NO_ERROR":                     0,
	"UNKNOWN_ERROR":                1,
	"INTERNAL_ERROR":               2,
	"INVALID_USERNAME_OR_PASSWORD": 3,
}

func (x Error) String() string {
	return proto.EnumName(Error_name, int32(x))
}

func (Error) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_555bd8c177793206, []int{0}
}

type UserRole int32

const (
	UserRole_UNKNOWN_USER_ROLE UserRole = 0
	UserRole_ROLE_ADMIN        UserRole = 1
	UserRole_ROLE_USER         UserRole = 2
)

var UserRole_name = map[int32]string{
	0: "UNKNOWN_USER_ROLE",
	1: "ROLE_ADMIN",
	2: "ROLE_USER",
}

var UserRole_value = map[string]int32{
	"UNKNOWN_USER_ROLE": 0,
	"ROLE_ADMIN":        1,
	"ROLE_USER":         2,
}

func (x UserRole) String() string {
	return proto.EnumName(UserRole_name, int32(x))
}

func (UserRole) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_555bd8c177793206, []int{1}
}

type User struct {
	Id                   int64    `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Role                 UserRole `protobuf:"varint,2,opt,name=role,proto3,enum=common.UserRole" json:"role,omitempty"`
	Nickname             string   `protobuf:"bytes,3,opt,name=nickname,proto3" json:"nickname,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *User) Reset()         { *m = User{} }
func (m *User) String() string { return proto.CompactTextString(m) }
func (*User) ProtoMessage()    {}
func (*User) Descriptor() ([]byte, []int) {
	return fileDescriptor_555bd8c177793206, []int{0}
}

func (m *User) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_User.Unmarshal(m, b)
}
func (m *User) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_User.Marshal(b, m, deterministic)
}
func (m *User) XXX_Merge(src proto.Message) {
	xxx_messageInfo_User.Merge(m, src)
}
func (m *User) XXX_Size() int {
	return xxx_messageInfo_User.Size(m)
}
func (m *User) XXX_DiscardUnknown() {
	xxx_messageInfo_User.DiscardUnknown(m)
}

var xxx_messageInfo_User proto.InternalMessageInfo

func (m *User) GetId() int64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *User) GetRole() UserRole {
	if m != nil {
		return m.Role
	}
	return UserRole_UNKNOWN_USER_ROLE
}

func (m *User) GetNickname() string {
	if m != nil {
		return m.Nickname
	}
	return ""
}

func init() {
	proto.RegisterEnum("common.Error", Error_name, Error_value)
	proto.RegisterEnum("common.UserRole", UserRole_name, UserRole_value)
	proto.RegisterType((*User)(nil), "common.User")
}

func init() { proto.RegisterFile("common.proto", fileDescriptor_555bd8c177793206) }

var fileDescriptor_555bd8c177793206 = []byte{
	// 278 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x3c, 0x90, 0x51, 0x4b, 0xfb, 0x30,
	0x14, 0xc5, 0x97, 0x6e, 0xff, 0xb1, 0x5d, 0xb6, 0x92, 0x5d, 0xf8, 0xc3, 0x10, 0x1f, 0x8a, 0xf8,
	0x50, 0xf6, 0xb0, 0x82, 0x7e, 0x01, 0x2b, 0x2b, 0x58, 0xdc, 0x12, 0x49, 0x9d, 0x13, 0x1f, 0x0c,
	0x6d, 0x17, 0xb4, 0x74, 0x6d, 0x24, 0xab, 0xfa, 0xf5, 0x25, 0xb5, 0xf3, 0x29, 0x39, 0xe7, 0xfc,
	0xee, 0xe5, 0xde, 0x0b, 0x93, 0x5c, 0x57, 0x95, 0xae, 0x97, 0x1f, 0x46, 0x37, 0x1a, 0x87, 0xbf,
	0xea, 0xe2, 0x19, 0x06, 0xdb, 0xa3, 0x32, 0xe8, 0x82, 0x53, 0xec, 0xe7, 0xc4, 0x23, 0x7e, 0x5f,
	0x38, 0xc5, 0x1e, 0x2f, 0x61, 0x60, 0xf4, 0x41, 0xcd, 0x1d, 0x8f, 0xf8, 0xee, 0x15, 0x5d, 0x76,
	0xc5, 0x96, 0x15, 0xfa, 0xa0, 0x44, 0x9b, 0xe2, 0x19, 0x8c, 0xea, 0x22, 0x2f, 0xeb, 0xb4, 0x52,
	0xf3, 0xbe, 0x47, 0xfc, 0xb1, 0xf8, 0xd3, 0x8b, 0x57, 0xf8, 0x17, 0x19, 0xa3, 0x0d, 0x4e, 0x60,
	0xc4, 0xb8, 0x8c, 0x84, 0xe0, 0x82, 0xf6, 0x70, 0x06, 0xd3, 0x2d, 0xbb, 0x67, 0x7c, 0xc7, 0x3a,
	0x8b, 0x20, 0x82, 0x1b, 0xb3, 0xc7, 0x48, 0xb0, 0x70, 0xdd, 0x79, 0x0e, 0x7a, 0x70, 0x1e, 0xb3,
	0xa7, 0x70, 0x1d, 0xaf, 0xe4, 0x36, 0xb1, 0xd1, 0x26, 0x92, 0x5c, 0xc8, 0x87, 0x30, 0x49, 0x76,
	0x5c, 0xac, 0x68, 0x7f, 0x71, 0x03, 0xa3, 0xd3, 0x34, 0xf8, 0x1f, 0x66, 0xa7, 0xa6, 0x96, 0x96,
	0x82, 0xaf, 0x23, 0xda, 0x43, 0x17, 0xc0, 0xfe, 0x64, 0xb8, 0xda, 0xc4, 0x8c, 0x12, 0x9c, 0xc2,
	0xb8, 0xd5, 0x96, 0xa1, 0xce, 0xed, 0xe2, 0xc5, 0x7f, 0x2b, 0x9a, 0xf7, 0xcf, 0xcc, 0x6e, 0x17,
	0x24, 0x75, 0x5a, 0xaa, 0xbb, 0x34, 0x2f, 0x95, 0x09, 0x9a, 0x6f, 0x95, 0x05, 0x47, 0x65, 0xbe,
	0x94, 0x09, 0xda, 0x7b, 0x65, 0xc3, 0xf6, 0xb9, 0xfe, 0x09, 0x00, 0x00, 0xff, 0xff, 0xb2, 0x34,
	0x45, 0x27, 0x46, 0x01, 0x00, 0x00,
}
