// Code generated by protoc-gen-go. DO NOT EDIT.
// source: session.proto

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

type Session struct {
	Token                string   `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
	User                 *User    `protobuf:"bytes,2,opt,name=user,proto3" json:"user,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Session) Reset()         { *m = Session{} }
func (m *Session) String() string { return proto.CompactTextString(m) }
func (*Session) ProtoMessage()    {}
func (*Session) Descriptor() ([]byte, []int) {
	return fileDescriptor_3a6be1b361fa6f14, []int{0}
}

func (m *Session) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Session.Unmarshal(m, b)
}
func (m *Session) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Session.Marshal(b, m, deterministic)
}
func (m *Session) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Session.Merge(m, src)
}
func (m *Session) XXX_Size() int {
	return xxx_messageInfo_Session.Size(m)
}
func (m *Session) XXX_DiscardUnknown() {
	xxx_messageInfo_Session.DiscardUnknown(m)
}

var xxx_messageInfo_Session proto.InternalMessageInfo

func (m *Session) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

func (m *Session) GetUser() *User {
	if m != nil {
		return m.User
	}
	return nil
}

type LoginRequest struct {
	Username             string   `protobuf:"bytes,1,opt,name=username,proto3" json:"username,omitempty"`
	Password             string   `protobuf:"bytes,2,opt,name=password,proto3" json:"password,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *LoginRequest) Reset()         { *m = LoginRequest{} }
func (m *LoginRequest) String() string { return proto.CompactTextString(m) }
func (*LoginRequest) ProtoMessage()    {}
func (*LoginRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_3a6be1b361fa6f14, []int{1}
}

func (m *LoginRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LoginRequest.Unmarshal(m, b)
}
func (m *LoginRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LoginRequest.Marshal(b, m, deterministic)
}
func (m *LoginRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LoginRequest.Merge(m, src)
}
func (m *LoginRequest) XXX_Size() int {
	return xxx_messageInfo_LoginRequest.Size(m)
}
func (m *LoginRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_LoginRequest.DiscardUnknown(m)
}

var xxx_messageInfo_LoginRequest proto.InternalMessageInfo

func (m *LoginRequest) GetUsername() string {
	if m != nil {
		return m.Username
	}
	return ""
}

func (m *LoginRequest) GetPassword() string {
	if m != nil {
		return m.Password
	}
	return ""
}

type LoginResponse struct {
	Error                Error    `protobuf:"varint,1,opt,name=error,proto3,enum=common.Error" json:"error,omitempty"`
	Session              *Session `protobuf:"bytes,2,opt,name=session,proto3" json:"session,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *LoginResponse) Reset()         { *m = LoginResponse{} }
func (m *LoginResponse) String() string { return proto.CompactTextString(m) }
func (*LoginResponse) ProtoMessage()    {}
func (*LoginResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_3a6be1b361fa6f14, []int{2}
}

func (m *LoginResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LoginResponse.Unmarshal(m, b)
}
func (m *LoginResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LoginResponse.Marshal(b, m, deterministic)
}
func (m *LoginResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LoginResponse.Merge(m, src)
}
func (m *LoginResponse) XXX_Size() int {
	return xxx_messageInfo_LoginResponse.Size(m)
}
func (m *LoginResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_LoginResponse.DiscardUnknown(m)
}

var xxx_messageInfo_LoginResponse proto.InternalMessageInfo

func (m *LoginResponse) GetError() Error {
	if m != nil {
		return m.Error
	}
	return Error_NO_ERROR
}

func (m *LoginResponse) GetSession() *Session {
	if m != nil {
		return m.Session
	}
	return nil
}

type LogoutRequest struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *LogoutRequest) Reset()         { *m = LogoutRequest{} }
func (m *LogoutRequest) String() string { return proto.CompactTextString(m) }
func (*LogoutRequest) ProtoMessage()    {}
func (*LogoutRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_3a6be1b361fa6f14, []int{3}
}

func (m *LogoutRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LogoutRequest.Unmarshal(m, b)
}
func (m *LogoutRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LogoutRequest.Marshal(b, m, deterministic)
}
func (m *LogoutRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LogoutRequest.Merge(m, src)
}
func (m *LogoutRequest) XXX_Size() int {
	return xxx_messageInfo_LogoutRequest.Size(m)
}
func (m *LogoutRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_LogoutRequest.DiscardUnknown(m)
}

var xxx_messageInfo_LogoutRequest proto.InternalMessageInfo

type LogoutResponse struct {
	Error                Error    `protobuf:"varint,1,opt,name=error,proto3,enum=common.Error" json:"error,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *LogoutResponse) Reset()         { *m = LogoutResponse{} }
func (m *LogoutResponse) String() string { return proto.CompactTextString(m) }
func (*LogoutResponse) ProtoMessage()    {}
func (*LogoutResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_3a6be1b361fa6f14, []int{4}
}

func (m *LogoutResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LogoutResponse.Unmarshal(m, b)
}
func (m *LogoutResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LogoutResponse.Marshal(b, m, deterministic)
}
func (m *LogoutResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LogoutResponse.Merge(m, src)
}
func (m *LogoutResponse) XXX_Size() int {
	return xxx_messageInfo_LogoutResponse.Size(m)
}
func (m *LogoutResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_LogoutResponse.DiscardUnknown(m)
}

var xxx_messageInfo_LogoutResponse proto.InternalMessageInfo

func (m *LogoutResponse) GetError() Error {
	if m != nil {
		return m.Error
	}
	return Error_NO_ERROR
}

func init() {
	proto.RegisterType((*Session)(nil), "session.Session")
	proto.RegisterType((*LoginRequest)(nil), "session.LoginRequest")
	proto.RegisterType((*LoginResponse)(nil), "session.LoginResponse")
	proto.RegisterType((*LogoutRequest)(nil), "session.LogoutRequest")
	proto.RegisterType((*LogoutResponse)(nil), "session.LogoutResponse")
}

func init() { proto.RegisterFile("session.proto", fileDescriptor_3a6be1b361fa6f14) }

var fileDescriptor_3a6be1b361fa6f14 = []byte{
	// 250 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x90, 0x31, 0x4f, 0xc3, 0x30,
	0x10, 0x85, 0x15, 0x44, 0x29, 0x3d, 0x92, 0x82, 0x2c, 0x86, 0xaa, 0x53, 0x14, 0x96, 0xa8, 0x43,
	0x22, 0x15, 0xf1, 0x03, 0x40, 0x02, 0x31, 0x30, 0xb9, 0x62, 0x61, 0x22, 0x29, 0xa7, 0x12, 0x45,
	0xf1, 0x85, 0x3b, 0x87, 0xfe, 0x7d, 0x14, 0xc7, 0xee, 0xce, 0x64, 0xbd, 0xf7, 0xd9, 0xef, 0xee,
	0x19, 0x12, 0x41, 0x91, 0x86, 0x4c, 0xd1, 0x33, 0x59, 0x52, 0x73, 0x2f, 0xd7, 0xf1, 0x9e, 0xba,
	0x2e, 0xd8, 0xd9, 0x23, 0xcc, 0x77, 0x13, 0x50, 0xb7, 0x30, 0xb3, 0xd4, 0xa2, 0x59, 0x45, 0x69,
	0x94, 0x2f, 0xf4, 0x24, 0x54, 0x0a, 0xe7, 0x83, 0x20, 0xaf, 0xce, 0xd2, 0x28, 0xbf, 0xda, 0xc6,
	0x85, 0x7f, 0xfd, 0x2e, 0xc8, 0xda, 0x91, 0xec, 0x05, 0xe2, 0x37, 0x3a, 0x34, 0x46, 0xe3, 0xcf,
	0x80, 0x62, 0xd5, 0x1a, 0x2e, 0x47, 0xdf, 0x54, 0x1d, 0xfa, 0xa8, 0x93, 0x1e, 0x59, 0x5f, 0x89,
	0x1c, 0x89, 0xbf, 0x5c, 0xe2, 0x42, 0x9f, 0x74, 0xf6, 0x09, 0x89, 0xcf, 0x91, 0x9e, 0x8c, 0xa0,
	0xba, 0x83, 0x19, 0x32, 0x13, 0xbb, 0x94, 0xe5, 0x36, 0x09, 0xb3, 0x9f, 0x47, 0x53, 0x4f, 0x4c,
	0x6d, 0x20, 0x34, 0xf3, 0x2b, 0xde, 0x14, 0xa1, 0xb8, 0x2f, 0xa6, 0xc3, 0x85, 0xec, 0xda, 0x4d,
	0xa0, 0xc1, 0xfa, 0x55, 0xb3, 0x07, 0x58, 0x06, 0xe3, 0x1f, 0x33, 0x9f, 0x36, 0x1f, 0xf9, 0xa1,
	0xb1, 0xdf, 0x43, 0x3d, 0xd2, 0x72, 0x67, 0xaa, 0x16, 0x5f, 0xab, 0x7d, 0x8b, 0x5c, 0xda, 0x23,
	0xd6, 0xa5, 0x20, 0xff, 0x22, 0x97, 0xee, 0x83, 0xeb, 0x0b, 0x77, 0xdc, 0xff, 0x05, 0x00, 0x00,
	0xff, 0xff, 0x5a, 0x8e, 0x5b, 0x02, 0x8f, 0x01, 0x00, 0x00,
}
